var React = require('react');
var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var ItemTypes = require('./Constants').ItemTypes;
var findDOMNode = require('react-dom').findDOMNode;

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
       id: PropTypes.number.isRequired,
       connectDragSource: PropTypes.func.isRequired,
       isDragging: PropTypes.bool.isRequired,
       onMove: PropTypes.func.isRequired,
       uuid: PropTypes.string.isRequired
    },
    render: function () {
       var name = this.props.name;
       var id = this.props.id;
       var connectDragSource = this.props.connectDragSource;
       var connectDropTarget = this.props.connectDropTarget;
       var opacity = this.props.isDragging ? 0 : 1;

       return connectDragSource(connectDropTarget(
           <div style={{
                position: 'relative',
                width: '100%',
                height: '10px',
                opacity
            }}>
                {name}
                {id}
           </div>
       ));
    }
});

module.exports = DragSource(ItemTypes.CONFIGUREDJOB, jobSource, collect)(DropTarget(ItemTypes.CONFIGUREDJOB,cardTarget, collectTarget)(ConfiguredJob));