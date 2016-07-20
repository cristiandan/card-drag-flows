import React, { PropTypes } from 'react'

const CodeEdit = ({ postedData }) => {
    const json = JSON.stringify(postedData);
    return (
        <div> { json }</div>
    )
}


export default CodeEdit;