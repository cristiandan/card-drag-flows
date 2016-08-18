//import DeletePostModal from './DeletePostModal'
//import ConfirmLogoutModal from './ConfirmLogoutModal'

const MODAL_COMPONENTS = {
  'DELETE_POST': DeletePostModal,
  'CONFIRM': ConfirmLogoutModal,
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