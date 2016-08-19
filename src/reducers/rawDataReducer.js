import { List } from 'immutable'
import { LOAD_COMPONENTS_FROM_FLOW_SUCCESS, CLEAR_FLOW, POST_CONFIGURED_COMPONENT_DATA_SUCCESS, POST_CONFIGURED_COMPONENT_DATA_REQUEST } from '../actions/actions'

var defaultRawData = "";

function  getEmptyRawDataState() {
  return Object.assign({}, {
          isFetching: false,
          data: defaultRawData
  })
}

function rawDataReducer(state = getEmptyRawDataState(), action) {
    switch(action.type) {
      case POST_CONFIGURED_COMPONENT_DATA_REQUEST:
        return Object.assign({},state,{isFetching:true});
      case POST_CONFIGURED_COMPONENT_DATA_SUCCESS: //edit when use post
        return Object.assign({},state, {data: action.data, isFetching:false});
      case CLEAR_FLOW:
        return getEmptyRawDataState();
      case LOAD_COMPONENTS_FROM_FLOW_SUCCESS:
        return getEmptyRawDataState();
      default:
        return state;
    }
}

export default rawDataReducer