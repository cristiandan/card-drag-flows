import { List } from 'immutable'
import { POST_CONFIGURED_COMPONENT_DATA_SUCCESS, POST_CONFIGURED_COMPONENT_DATA_REQUEST } from '../actions/actions'

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
      default:
        return state;
    }
}

export default rawDataReducer