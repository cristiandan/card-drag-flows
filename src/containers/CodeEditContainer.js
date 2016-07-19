import { connect } from 'react-redux'
import CodeEdit from '../components/CodeEdit'

const mapStateToProps = (state) => {
  return {
    postedData: state.configuredComponents.postedData
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