import { connect } from 'react-redux'
import { addConfiguredJob, moveConfiguredJob, selectModalJob } from './actions'
import ConfigJobList from './ConfigJobList'

const mapStateToProps = (state) => {
  return {
    jobs: state.configuredJobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMove: (dragIndex, hoverIndex) => {
      dispatch(moveConfiguredJob(dragIndex, hoverIndex))
    },
    onDrop: (jobId) => {
      dispatch(addConfiguredJob(jobId))
    },
    onSelectModalJob: (jobId) => {
      dispatch(selectModalJob(jobId))
    }
  }
}

const ConfiguredJobContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigJobList);

export default ConfiguredJobContainer