import React, { PropTypes } from 'react'

const CodeEdit = ({ rawData }) => {
    const json = JSON.stringify(rawData.data);
    return (
        <div> { json }</div>
    )
}


export default CodeEdit;