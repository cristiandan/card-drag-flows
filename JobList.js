var React = require('react');
var PropTypes = React.PropTypes;

import ImmutablePropTypes from 'react-immutable-proptypes'
import Job from './Job'

// scoate onDrag
const JobList = ({ jobs, onDrag }) => {
    return (<div style={{
            width: '20%',
            height: '70%',
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'blue'
          }}>
    {jobs.map(job =>
      <Job name={job.name} id={job.id} key={job.id} onDrag={() => onDrag(job.id)}/>
    )}
  </div>)
};

JobList.propTypes = {
  jobs: ImmutablePropTypes.list.isRequired,
  onDrag: PropTypes.func.isRequired
}


// var jobs = [{name: "ab1",id:32},{name: "ab2",id:21}, {name:"ab3",id:55}];

// var JobList = React.createClass({
//     propTypes: {
        
//     },
//     renderJob: function (job) {
//         return (
//             <Job name={job.name} id={job.id} key={job.id}/>
//         );
//     },
//     render: function () {
//         var renderedJobs = [];
//         for (var i =0; i<jobs.length; i++) {
//             renderedJobs.push(this.renderJob(jobs[i]));
//         }
        
//         return (
//           <div style={{
//             width: '20%',
//             height: '70%',
//             display: 'flex',
//             flexWrap: 'wrap',
//             backgroundColor: 'blue'
//           }}>
//             {renderedJobs}
//           </div>  
//         );
//     }
// });

module.exports = JobList;