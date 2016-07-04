import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ConfiguredJob from './ConfiguredJob'
import { DropTarget } from 'react-dnd';
import * as ItemTypes from './Constants'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

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

// const ConfigJobList = ({ jobs, onMove, onDrop, connectDropTarget }) => {
//     return connectDropTarget(
//       <div id="configuredjoblist" style={{width:"100%", height:"100%"}} className="container uk-grid uk-grid-medium uk-grid-width-xlarge-1-6 uk-grid-width-large-1-5 uk-grid-width-medium-1-4 uk-grid-width-small-1-3 uk-vertical-align-middle" data-uk-grid-margin data-uk-observe>
//         {jobs.data.map( (job,index) =>
//           <ConfiguredJob uuid={job.uuid} name={job.name} id={job.id} key={job.uuid} index={index} onMove={(dragIndex, hoverIndex) => onMove(dragIndex, hoverIndex)}/>
//         )}
//       </div>
//     )
// };

// ConfigJobList.propTypes = {
//   jobs: PropTypes.object.isRequired,
//   onMove: PropTypes.func.isRequired,
//   onDrop: PropTypes.func.isRequired
// }

class ConfigJobList extends React.Component {
    constructor (props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {isShowingModal:false, modalJobId: null};
    this.props = props;
  }

  openModal (jobId) {
    console.log("open modal",jobId);
    this.setState({isShowingModal: true, modalJobId: jobId});
    this.props.onSelectModalJob(jobId);
  }

  closeModal() {
    this.setState({isShowingModal:false});
  }

  render() {
    var jobs = this.props.jobs;
    var onDrag = this.props.onDrag;
    var connectDropTarget = this.props.connectDropTarget;
    return connectDropTarget (
      <div id="configuredjoblist" style={{width:"100%", height:"100%"}} className="container uk-grid uk-grid-medium uk-grid-width-xlarge-1-6 uk-grid-width-large-1-5 uk-grid-width-medium-1-4 uk-grid-width-small-1-3 uk-vertical-align-middle" data-uk-grid-margin data-uk-observe>
        {jobs.data.map( (job,index) =>
          <ConfiguredJob uuid={job.uuid} name={job.name} id={job.id} key={job.uuid} index={index} onMove={(dragIndex, hoverIndex) => onMove(dragIndex, hoverIndex)} onClick={() => this.openModal(job.uuid)}/>
        )}
        { this.state.isShowingModal && jobs.selectedModalJob ? 
          <ModalContainer onClose={this.closeModal}>
            <ModalDialog onClose={this.closeModal}>
              {jobs.selectedModalJob.name}
              
            </ModalDialog>
          </ModalContainer> : "" }

      </div>
        
      )
  }
}

export default DropTarget(ItemTypes.JOB, target, collect)(ConfigJobList);