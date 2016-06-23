import { ADD_CONFIGURED_JOB, MOVE_CONFIGURED_JOB, ADD_JOB, GET_JOBS_REQUEST, GET_JOBS_FAILURE, GET_JOBS_SUCCESS  } from './actions'
var Immutable = require('immutable');
import { combineReducers } from 'redux'
import { guid } from './utils'

var jobsList = Immutable.List([{name: "ab1",id:32},{name: "ab2",id:21}, {name:"ab3",id:55}]);

const jobsApp = combineReducers({
  jobs: jobsReducer,
  configuredJobs: configuredJobsReducer
});

function getEmptyJobsState() {
  return Object.assign({}, {
          isFetching: false,
          data: Immutable.List(jobsList)
        })
}

function getEmptyConfiguredJobsState() {
  return Object.assign({}, {
          isFetching: false,
          data: Immutable.List()
        })
}

function jobsReducer(state = getEmptyJobsState(), action) {
    switch(action.type) {
      case ADD_JOB:
        return state.data.push(action.job);
      case GET_JOBS_REQUEST:
        return Object.assign({},state,{isFetching:true});
      case GET_JOBS_SUCCESS:
        return Object.assign({}, {
          isFetching: false,
          data: Immutable.List(action.jobs)
        });
      case GET_JOBS_FAILURE:
        return state;
      default:
        return state;
  }
}

function configuredJobsReducer(state = getEmptyConfiguredJobsState(), action) {
    switch(action.type) {
      case ADD_CONFIGURED_JOB:
        const job = Object.assign({},action.job, {uuid: guid()});
        const newStateData = state.data.push(job);

        return Object.assign({},state, {data: newStateData});
      case MOVE_CONFIGURED_JOB:
        const selectedJob = state.get(action.fromIndex);  
        return state.delete(action.fromIndex).insert(action.toIndex,selectedJob);
      default:
        return state;
  }
}


export default jobsApp