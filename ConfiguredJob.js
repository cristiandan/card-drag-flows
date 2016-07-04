import React, { PropTypes } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import * as ItemTypes from './Constants'
import { findDOMNode } from 'react-dom'

var jobSource = {
  beginDrag: function (props) {
    return {name: props.name, id: props.id, uuid:props.uuid, index: props.index};
  }
};

var cardTarget = {
  hover: function (props, monitor, component) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    var hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    var clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.onMove(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function collectTarget(connect, monitor) {
     return { 
        connectDropTarget: connect.dropTarget()
     }
}

var ConfiguredJob = React.createClass({
    propTypes: {
       name: PropTypes.string.isRequired,
       id: PropTypes.string.isRequired,
       connectDragSource: PropTypes.func.isRequired,
       isDragging: PropTypes.bool.isRequired,
       onMove: PropTypes.func.isRequired,
       uuid: PropTypes.string.isRequired,
       index: PropTypes.number.isRequired,
    },
    render: function () {
       var name = this.props.name;
       var id = this.props.id;
       var index = this.props.index;
       var connectDragSource = this.props.connectDragSource;
       var connectDropTarget = this.props.connectDropTarget;
       var opacity = this.props.isDragging ? 0 : 1;
       var onClick = this.props.onClick;

       return connectDragSource(connectDropTarget(
           <div className="panel-container" style={{ opacity }}>
              <div className="uk-flex uk-flex-center uk-flex-top uk-text-center uk-panel uk-panel-box">
                    <div className='uk-flex uk-flex-middle'> <div className='uk-badge'> {index} </div> </div>
                    {name}
                    <button onClick={onClick}>Edit</button>
              </div>
           </div>
       ));
    }
});

module.exports = DragSource(ItemTypes.CONFIGURED_JOB, jobSource, collect)(DropTarget(ItemTypes.CONFIGURED_JOB,cardTarget, collectTarget)(ConfiguredJob));