import React, { PropTypes } from 'react'
import ModalJob from './ModalJob'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    jobs: state.configuredJobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (job) => {
      dispatch()
    }
  }
}

const EditableModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalJob);

export default EditableModal;