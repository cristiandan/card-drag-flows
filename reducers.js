import { ADD_CONFIGURED_JOB, MOVE_CONFIGURED_JOB, ADD_JOB, GET_JOBS_REQUEST, GET_JOBS_FAILURE, GET_JOBS_SUCCESS  } from './actions'
var Immutable = require('immutable');
import { combineReducers } from 'redux'

var jobsList = Immutable.List([{name: "ab1",id:32},{name: "ab2",id:21}, {name:"ab3",id:55}]);

const jobsApp = combineReducers({
  jobs: jobsReducer,
  configuredJobs: configuredJobsReducer
});

function jobsReducer(state = Immutable.List(jobsList), action) {
    switch(action.type) {
      case ADD_JOB:
        return state.push(action.job);
      default:
        return state;
  }
}

function configuredJobsReducer(state = Immutable.List(), action) {
    switch(action.type) {
      case ADD_CONFIGURED_JOB:
        const job = Object.assign({},action.job, {uuid: guid()});
        return state.push(job);
      case MOVE_CONFIGURED_JOB:
        const selectedJob = state.get(action.fromIndex);  
        return state.delete(action.fromIndex).insert(action.toIndex,selectedJob);
      default:
        return state;
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export default jobsApp