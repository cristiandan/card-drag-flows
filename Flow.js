import React, { PropTypes } from 'react'

const Flow = ({name, onClick}) => {

    return (
        <div className="panel-container">
            <div className="uk-flex uk-flex-center uk-flex-top uk-text-center uk-panel uk-panel-box">
              {name}
          </div>
        </div>
    )
};

export default Flow;