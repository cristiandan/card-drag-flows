import { connect } from 'react-redux'
import { loadFlow } from './actions'
import FlowList from './FlowList'

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