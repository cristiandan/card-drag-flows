import React, { PropTypes } from 'react'
import {inheritedParametersProcessor} from './dataProcessor'
import ReactTooltip from 'react-tooltip'

// const ModalJob2 = ({job, onSave}) => {
//     var parameters = job.parameters;
//     var rows = [];
//     for (var key in parameters) {
//          rows.push(<div key={key}> {key} <input type='text' value ={parameters[key]}/> </div>);
//     }

//     return (
//         <div>
//             {job.name}
//             {rows}
//         </div>
//     );
// }

// ModalJob2.propTypes = {
//     job: PropTypes.object.isRequired,
//     onSave: PropTypes.func.isRequired
// }

class ModalJob extends React.Component {
    constructor (props) {
        super (props);

        this.onClickSave = this.onClickSave.bind(this);

        this.state = { attributes: this.props.job.parameters };
        this.props = props;
    }

    onClickSave () {
        this.props.onSave(this.props.job.uuid, this.state.attributes)
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
        var job = this.props.job;
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
                {job.name}
                {activeRows}
                Advanced:
                {advancedRows}
                {tooltips}
                <button onClick={this.onClickSave}>save</button>
                
            </div>
        );
    }
}

export default ModalJob