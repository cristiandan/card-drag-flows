import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ConfiguredJob from './ConfiguredJob'
import { DropTarget } from 'react-dnd';
import * as ItemTypes from './Constants'

var target = {
    
  canDrop: function (props) {
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
  console.log('jobs',jobs);
    return connectDropTarget(
      <div id="configuredjoblist" style={{width:"100%", height:"100%"}} className="container uk-grid uk-grid-medium uk-grid-width-xlarge-1-6 uk-grid-width-large-1-5 uk-grid-width-medium-1-4 uk-grid-width-small-1-3 uk-vertical-align-middle" data-uk-grid-margin data-uk-observe>
        {jobs.data.map( (job,index) =>
          <ConfiguredJob uuid={job.uuid} name={job.name} id={job.id} key={job.uuid} index={index} onMove={(dragIndex, hoverIndex) => onMove(dragIndex, hoverIndex)}/>
        )}
      </div>
    )
};

ConfigJobList.propTypes = {
  jobs: PropTypes.object.isRequired,
  onMove: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
}

module.exports = DropTarget(ItemTypes.JOB, target, collect)(ConfigJobList);