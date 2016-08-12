import React, { PropTypes } from 'react'
import {ModalDialog} from 'react-modal-dialog'

class DialogModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClickSave = this.onClickSave.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = { name: "name" };

        this.props = props;
    }

    onClickSave () {
        this.props.onSave(this.state.name)
        this.props.onClose();
    }


    render() {
        const name = this.state.name;

        return(
            <div>
                <ModalDialog onClose={this.props.onClose}>
                    <p>Changes were not saved, are you sure you want to continue?</p>
                    <button onClick={this.onClickSave}>Yes</button>
                    <button onClick={this.props.onClose}>No</button>
                </ModalDialog>
            </div>
        )
    }
}

export default DialogModal