import { ADD_CONFIGURED_JOB, MOVE_CONFIGURED_JOB, ADD_JOB, GET_JOBS_REQUEST, GET_JOBS_FAILURE, GET_JOBS_SUCCESS, GET_FLOWS_REQUEST, GET_FLOWS_FAILURE, GET_FLOWS_SUCCESS,LOAD_FLOW } from './actions'
var Immutable = require('immutable');
import { combineReducers } from 'redux'
import { guid } from './utils'

var defaultJobsList = Immutable.List([{name: "ab1",id:'32'},{name: "ab2",id:'21'}, {name:"ab3",id:'55'}]);
var defaultConfiguredJobsList = Immutable.List();
var defaultFlowList = Immutable.List([{name: "ab1",id:'32'},{name: "ab2",id:'21'}, {name:"ab3",id:'55'}]);

const jobsApp = combineReducers({
  jobs: jobsReducer,
  configuredJobs: configuredJobsReducer,
  flows: flowsReducer
});

function getEmptyJobsState() {
  return Object.assign({}, {
          isFetching: false,
          data: Immutable.List(defaultJobsList)
        })
}

function  getEmptyFlowsState() {
  return Object.assign({}, {
          isFetching: false,
          data: Immutable.List(defaultFlowList)
  })
}

function getEmptyConfiguredJobsState() {
  return Object.assign({}, {
          isFetching: false,
          data: Immutable.List(defaultConfiguredJobsList)
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
        const selectedJob = state.data.get(action.fromIndex);  
        const newData = state.data.delete(action.fromIndex).insert(action.toIndex,selectedJob);

        return Object.assign({},state, {data: newData});
      default:
        return state;
  }
}

function flowsReducer(state = getEmptyFlowsState(), action) {
    switch(action.type) {
      case GET_FLOWS_REQUEST:
        return Object.assign({},state,{isFetching:true});
      case GET_FLOWS_SUCCESS:
        return Object.assign({}, {
          isFetching: false,
          data: Immutable.List(action.flows)
        });
      case GET_JOBS_FAILURE:
        return state;
      case LOAD_FLOW:
        console.log(action.flowId);
        return state;
      default:
        return state;
    }
}


export default jobsApp