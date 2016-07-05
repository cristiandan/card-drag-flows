import React, { PropTypes } from 'react'

const ModalJob2 = ({job, onSave}) => {
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

ModalJob2.propTypes = {
    job: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
}

class ModalJob extends React.Component {
    constructor (props) {
        super (props);

        this.state = { attributes: this.props.job.attributes };
        this.props = props;
    }

    onClickSave () {
        
    }

    render() {

    }
}

export default ModalJob