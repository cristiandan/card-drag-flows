import React, { PropTypes } from 'react'

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
        const changedAttributes = Object.assign({}, this.state.attributes, { [key] : value });

        this.setState({attributes: changedAttributes})
    }

    render() {
        var parameters = this.state.attributes;
        var job = this.props.job;
        var rows = [];
        for (const key in parameters) {
            rows.push(<div key={key}> {key} <input type='text' value ={parameters[key]} onChange={(event) => this.handleParameterChange(event,key)} /> </div>);
        }
        
        return (
            <div>
                {job.name}
                {rows}
                <button onClick={this.onClickSave}>save</button>
            </div>
        );
    }
}

export default ModalJob