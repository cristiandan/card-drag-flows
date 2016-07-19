import { ADD_CONFIGURED_JOB, MOVE_CONFIGURED_JOB, ADD_JOB, GET_JOBS_REQUEST, GET_JOBS_FAILURE, GET_JOBS_SUCCESS, GET_FLOWS_REQUEST, GET_FLOWS_FAILURE, GET_FLOWS_SUCCESS,LOAD_FLOW, SELECT_MODAL_JOB, UPDATE_CONFIGURED_JOB, POST_CONFIGURED_JOB_DATA_SUCCESS } from './actions'
var Immutable = require('immutable');
import { combineReducers } from 'redux'

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
          data: Immutable.List(defaultConfiguredJobsList),
          selectedModalJob: null
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
        const newStateData = state.data.push(action.job);

        return Object.assign({},state, {data: newStateData});
      case MOVE_CONFIGURED_JOB:
        const selectedJob = state.data.get(action.fromIndex);  
        const newData = state.data.delete(action.fromIndex).insert(action.toIndex,selectedJob);

        return Object.assign({},state, {data: newData});
      case LOAD_FLOW:
        console.log(action.flow);
        return Object.assign({},state,{data: Immutable.List(action.flow.components)});
      case SELECT_MODAL_JOB:
        const selected = state.data.filter(x => x.uuid == action.jobId).get(0);

        return Object.assign({}, state, {selectedModalJob: selected})
      case UPDATE_CONFIGURED_JOB:
        const selectedJobIndex = state.data.findKey(x => x.uuid == action.jobUuid);
        const selectedJobToUpdate = state.data.get(selectedJobIndex);
        const updatedJob = Object.assign({}, selectedJobToUpdate, { parameters: action.attributes })
        return Object.assign({},state,{data: state.data.set(selectedJobIndex,updatedJob)});
      
      case POST_CONFIGURED_JOB_DATA_SUCCESS: //edit when use post
        return Object.assign({},state, {postedData: action.data});

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
      default:
        return state;
    }
}


export default jobsApp