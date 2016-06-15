import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ConfiguredJob from './ConfiguredJob'
import { DropTarget } from 'react-dnd';


const ConfigJobList = ({ jobs, onMove, onDrop }) => {
    return (<div style={{
            width: '20%',
            height: '70%',
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'yellow'
          }}>
    {jobs.map(job =>
      <ConfiguredJob name={job.name} id={job.id} key={job.id} onMove={(dragIndex, hoverIndex) => onMove(dragIndex, hoverIndex)}/>
    )}
  </div>)
};

ConfigJobList.propTypes = {
  jobs: ImmutablePropTypes.list.isRequired,
  onMove: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
}

module.exports = ConfigJobList;