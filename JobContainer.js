import { connect } from 'react-redux'
import { addJob } from './actions'
import JobPannel from './JobPannel'

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrag: (id) => {
      console.log('a');
    }
  }
}

const JobContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPannel);

export default JobContainer