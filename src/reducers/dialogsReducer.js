import { a } from '../actions/actions'

function  getEmptyDialogsState() {
  return Object.assign({}, {
          isShowing: false,
          continueFunction: () => {}
  })
}

function dialogsReducer(state = getEmptyDialogsState(), action) {
    switch(action.type) {
      case POST_CONFIGURED_COMPONENT_DATA_REQUEST:
        return Object.assign({},state,{isFetching:true});
      case POST_CONFIGURED_COMPONENT_DATA_SUCCESS: //edit when use post
        return Object.assign({},state, {data: action.data, isFetching:false});
      default:
        return state;
    }
}

export default dialogsReducer