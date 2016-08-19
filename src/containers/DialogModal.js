import React, { PropTypes } from 'react'
import {ModalDialog} from 'react-modal-dialog'

const DialogModal = ({continueFunction,onClose}) => (
            <div>
                <ModalDialog onClose={onClose}>
                    <p>Changes were not saved, are you sure you want to continue?</p>
                    <button onClick={continueFunction}>Yes</button>
                    <button onClick={onClose}>No</button>
                </ModalDialog>
            </div>
        )
    


export default DialogModal