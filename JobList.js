import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Job from './Job'

// scoate onDrag
const JobList = ({ jobs, onDrag }) => {
    return (
      <div id="joblist" className="container uk-grid uk-grid-small uk-grid-width-1-1 uk-vertical-align-middle uk-margin-bottom uk-scrollable-box" data-uk-grid-margin data-uk-observe>
        {jobs.data.map(job =>
          <Job name={job.name} id={job.id} key={job.id} onDrag={() => onDrag(job.id)}/>
        )}
      </div>
  )
};

JobList.propTypes = {
  jobs: PropTypes.object.isRequired,
  onDrag: PropTypes.func.isRequired
}


// class JobList extends React.Component {
//   state = {
//     isShowingModal: false,
//   }
// }

export default JobList;