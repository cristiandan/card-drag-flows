import { connect } from 'react-redux'
import { addJob } from './actions'
import JobList from './JobList'

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
)(JobList);

export default JobContainer