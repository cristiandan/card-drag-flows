import React, { PropTypes } from 'react'
import {inheritedParametersProcessor} from '../processing/dataProcessor'
import ReactTooltip from 'react-tooltip'
import {ModalDialog} from 'react-modal-dialog';
import Collapsible from '../../node_modules/react-collapsible/src/Collapsible'; //TODO: solve this


class ComponentModal extends React.Component {
    constructor (props) {
        super (props);

        this.onClickSave = this.onClickSave.bind(this);

        this.state = { attributes: this.props.component.parameters };
        this.props = props;
    }

    onClickSave () {
        this.props.onSave(this.props.component.uuid, this.state.attributes)
        this.props.onClose();
    }

    handleParameterChange (event,key) {
        const value = event.target.value;
        const attributesData = Object.assign({},this.state.attributes[key], { value, inherited: false });
        const changedAttributes = Object.assign({}, this.state.attributes, { [key] : attributesData });

        this.setState({attributes: changedAttributes})
    }

    render() {
        var parameters = inheritedParametersProcessor(this.state.attributes);
        var component = this.props.component;
        var activeRows = [];
        var advancedRows = [];
        var tooltips = [];

        for (const key in parameters.activeParams) {
            activeRows.push(<div key={key}> 
                <span data-tip data-for={key}> {key} </span>
                <input type='text' value ={parameters.activeParams[key].value} onChange={(event) => this.handleParameterChange(event,key)} /> 
            </div>);
        }

        for (const key in parameters.inheritedParams) {
            advancedRows.push(<div key={key}>
                <span data-tip data-for={key}> {key} </span>
                <input type='text' value ={parameters.inheritedParams[key].value} onChange={(event) => this.handleParameterChange(event,key)} /> 
            </div>);
        }

        for (const key in this.state.attributes) {
            tooltips.push(<div key={key}> 
                <ReactTooltip place="bottom" type="dark" effect="float" id={key}>
                    <span>{this.state.attributes[key].description}</span>
                </ReactTooltip>
            </div>);
        }
        
        return (
           <div>
            <ModalDialog onClose={this.props.onClose}>
                <div>
                    {component.name}
                    {activeRows}
                    <Collapsible triggerText="Advanced:">
                        {advancedRows}
                    </Collapsible>
                    <button onClick={this.onClickSave}>Save</button>
                    
                </div>
                </ModalDialog>
                {tooltips}
            </div>
        );
    }
}

export default ComponentModal