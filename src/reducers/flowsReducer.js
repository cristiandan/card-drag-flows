import { List } from 'immutable'
import { GET_FLOWS_REQUEST, GET_FLOWS_SUCCESS, GET_FLOWS_FAILURE } from '../actions/actions'

var defaultFlowList = List([{name: "ab1",id:'32'},{name: "ab2",id:'21'}, {name:"ab3",id:'55'}]);

function  getEmptyFlowsState() {
  return Object.assign({}, {
          isFetching: false,
          data: List(defaultFlowList)
  })
}

function flowsReducer(state = getEmptyFlowsState(), action) {
    switch(action.type) {
      case GET_FLOWS_REQUEST:
        return Object.assign({},state,{isFetching:true});
      case GET_FLOWS_SUCCESS:
        return Object.assign({}, {
          isFetching: false,
          data: List(action.flows)
        });
      case GET_FLOWS_FAILURE:
        return state;
      default:
        return state;
    }
}

export default flowsReducer