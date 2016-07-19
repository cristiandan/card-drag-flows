import { connect } from 'react-redux'
import { loadFlow } from '../actions/actions'
import FlowList from '../components/FlowList'

const mapStateToProps = (state) => {
  return {
    flows: state.flows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(loadFlow(id));
    }
  }
}

const FlowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowList);

export default FlowContainer