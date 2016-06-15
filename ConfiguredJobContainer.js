import { connect } from 'react-redux'
import { addJob, moveConfiguredJob } from './actions'
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
    }
  }
}

const ConfiguredJobContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigJobList);

export default ConfiguredJobContainer