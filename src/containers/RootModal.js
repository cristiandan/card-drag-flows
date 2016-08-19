//import DeletePostModal from './DeletePostModal'
//import ConfirmLogoutModal from './ConfirmLogoutModal'
import DialogModal from './DialogModal'
import { connect } from 'react-redux'
import React from 'react'

const MODAL_COMPONENTS = {
  'DialogModal': DialogModal,
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.dialogs
)(ModalRoot)