var React = require('react');
var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;
var ItemTypes = require('./Constants').ItemTypes;

var jobSource = {
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

var Job = React.createClass({
   propTypes: {
       name: PropTypes.string.isRequired,
       id: PropTypes.number.isRequired,
       connectDragSource: PropTypes.func.isRequired,
       isDragging: PropTypes.bool.isRequired
   },
   render: function () {
       var name = this.props.name;
       var id = this.props.id;
       var connectDragSource = this.props.connectDragSource;
       
       return connectDragSource(
        <div style={{
            position: 'relative',
            width: '100%'
        }}>
            {name}
            {id}
        </div>
       );
   }
});

module.exports = DragSource(ItemTypes.JOB, jobSource, collect)(Job);