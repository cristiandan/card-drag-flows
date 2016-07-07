import { connect } from 'react-redux'
import CodeEdit from './CodeEdit'

const mapStateToProps = (state) => {
  return {
    postedData: state.configuredJobs.postedData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (a) => {
      console.log('a');
    }
  }
}

const CodeEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CodeEdit);

export default CodeEditContainer