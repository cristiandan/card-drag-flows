import { SHOW_MODAL, HIDE_MODAL } from '../actions/actions'

function  getEmptyDialogsState() {
  return Object.assign({}, {
          isShowing: false,
          modalType: null,
          modalProps: {}
  })
}

function dialogsReducer(state = getEmptyDialogsState(), action) {
  console.log('action',action);
    switch(action.type) {
      case SHOW_MODAL:
        return {
          modalType: action.modalType,
          modalProps: action.modalProps
        }
      case HIDE_MODAL:
        return getEmptyDialogsState();
      default:
        return state;
    }
}

export default dialogsReducer