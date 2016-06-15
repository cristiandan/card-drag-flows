import { ADD_CONFIGURED_JOB, MOVE_CONFIGURED_JOB, ADD_JOB  } from './actions'
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
        return state.push(action.job);
      case MOVE_CONFIGURED_JOB:
        return state; // modify here the move job
      default:
        return state;
  }
}

export default jobsApp