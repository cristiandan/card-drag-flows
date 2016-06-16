import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ConfiguredJob from './ConfiguredJob'
import { DropTarget } from 'react-dnd';

var ItemTypes = require('./Constants').ItemTypes;

var target = {
    
  canDrop: function (props,a ,b, c) {
    return true;
  },

  drop: function (props, monitor, component) {
    var item = monitor.getItem();
    props.onDrop({id: item.id, name: item.name});
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};

const ConfigJobList = ({ jobs, onMove, onDrop, connectDropTarget }) => {
    return connectDropTarget(<div style={{
            width: '20%',
            height: '70%',
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'yellow'
          }}>
    {jobs.map( (job,index) =>
      <ConfiguredJob uuid={job.uuid} name={job.name} id={job.id} key={job.uuid} index={index} onMove={(dragIndex, hoverIndex) => onMove(dragIndex, hoverIndex)}/>
    )}
  </div>)
};

ConfigJobList.propTypes = {
  jobs: ImmutablePropTypes.list.isRequired,
  onMove: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
}

module.exports = DropTarget(ItemTypes.JOB, target, collect)(ConfigJobList);