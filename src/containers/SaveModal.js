import React, { PropTypes } from 'react'
import {ModalDialog} from 'react-modal-dialog'

class SaveModal extends React.Component {
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

    handleNameChange (event) {
        const value = event.target.value;

        this.setState({name: value});
    }

    render() {
        const name = this.state.name;

        return(
            <div>
                <ModalDialog onClose={this.props.onClose}>
                    <span> Nume: </span>
                    <input type='text' value ={name} onChange={(event) => this.handleNameChange(event)} /> 
                    <button onClick={this.onClickSave}>Save</button>
                </ModalDialog>
            </div>
        )
    }
}

export default SaveModal