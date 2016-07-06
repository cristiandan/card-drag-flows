import React, { PropTypes } from 'react'
import ModalJob from './ModalJob'
import { connect } from 'react-redux'
import {updateConfiguredJob} from './actions'

const mapStateToProps = (state) => {
  return {
    job: state.configuredJobs.selectedModalJob
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (uuid, attributes) => {
      dispatch(updateConfiguredJob(uuid,attributes));
    }
  }
}

const EditableModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalJob);

export default EditableModal;