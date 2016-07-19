import React, { PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import * as ItemTypes from '../utils/Constants'

var componentSource = {
  beginDrag: function (props) {
    return {name: props.name, id: props.id};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Component = ({ name, id, connectDragSource, isDragging}) => {
       //var name = this.props.name;
       //var id = this.props.id;
       //var connectDragSource = this.props.connectDragSource;
       
       return connectDragSource(
        <div className="panel-container">
          <div className="uk-flex uk-flex-center uk-flex-top uk-text-center uk-panel uk-panel-box">
              {name}
          </div>
        </div>
       );
};

Component.propTypes = {
       name: PropTypes.string.isRequired,
       id: PropTypes.string.isRequired,
       connectDragSource: PropTypes.func.isRequired,
       isDragging: PropTypes.bool.isRequired
   };


export default DragSource(ItemTypes.COMPONENT, componentSource, collect)(Component);