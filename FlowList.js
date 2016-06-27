import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Flow from './Flow'

const FlowList = ({ flows, onClick }) => {
    return (
      <div id="flowlist" className="container uk-grid uk-grid-small uk-grid-width-1-1 uk-vertical-align-middle uk-margin-bottom uk-scrollable-box" data-uk-grid-margin data-uk-observe>
        {flows.data.map(flow =>
          <Flow name={flow.name} key={flow.id} onClick={() => onClick(job.id)}/>
        )}
      </div>
  )
};

FlowList.propTypes = {
  flows: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FlowList