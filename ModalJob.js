import React, { PropTypes } from 'react'

const ModalJob = ({job, onSave}) => {
    var parameters = job.parameters;
    var rows = [];
    for (var key in parameters) {
         rows.push(<div key={key}> {key} <input type='text' value ={parameters[key]}/> </div>);
    }

    return (
        <div>
            {job.name}
            {rows}
        </div>
    );
}

ModalJob.propTypes = {
    job: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}

export default ModalJob