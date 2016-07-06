import {
  jobsProcessor,
  flowsProcessor
} from './dataProcessor';
import fetch from 'isomorphic-fetch'
import { guid } from './utils'

/*
 * action types
 */

export const ADD_CONFIGURED_JOB = 'ADD_CONFIGURED_JOB'
export const MOVE_CONFIGURED_JOB = 'MOVE_CONFIGURED_JOB'
export const ADD_JOB = 'ADD_JOB'
export const GET_JOBS_REQUEST = 'GET_JOBS_REQUEST'
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
export const GET_FLOWS_REQUEST = 'GET_FLOWS_REQUEST'
export const GET_FLOWS_FAILURE = 'GET_FLOWS_FAILURE'
export const GET_FLOWS_SUCCESS = 'GET_FLOWS_SUCCESS'
export const LOAD_FLOW = 'LOAD_FLOW'
export const ERROR_LOADING_FLOW = 'ERROR_LOADING_FLOW'
export const SELECT_MODAL_JOB = 'SELECT_MODAL_JOB'
export const UPDATE_CONFIGURED_JOB = 'UPDATE_CONFIGURED_JOB'

/*
 * action creators
 */

export function addJob(job) {
  return {
    type: ADD_JOB,
    job
  }
}

export function moveConfiguredJob(fromIndex, toIndex) {
  return {
    type: MOVE_CONFIGURED_JOB,
    fromIndex,
    toIndex
  }
}

export function addConfiguredJob(jobId) {
  return (dispatch, getState) => {
    const job = getState()
      .jobs.data.filter(x => x.id == jobId).get(0);
    if (job) {
      const newJob = Object.assign({}, job, {uuid: guid()})
      dispatch(addConfiguredJobSuccess(newJob));
    }
    else {
      dispatch(addConfiguredJobError());
    }
  };
}

export function addConfiguredJobSuccess(job) {
  return {
    type: ADD_CONFIGURED_JOB,
    job
  }
}

export function addConfiguredJobError() {
  
}

export function getJobsRequest() {
  return {
    type: GET_JOBS_REQUEST
  }
}

export function getJobsSuccess(json) {
  return {
    type: GET_JOBS_SUCCESS,
    jobs: jobsProcessor(json)
  }
}

export function getJobsFailure(error) {
  return {
    type: GET_JOBS_FAILURE,
    error
  }
}

export function fetchJobs() {
  return function(dispatch) {
    dispatch(getJobsRequest());

    return fetch('jobs.json')
      .then(response => response.json())
      .then(json =>
        dispatch(getJobsSuccess(json))
      )
  }
}

export function getFlowsRequest() {
  return {
    type: GET_FLOWS_REQUEST
  }
}

export function getFlowsSuccess(json) {
  return {
    type: GET_FLOWS_SUCCESS,
    flows: flowsProcessor(json)
  }
}

export function getFlowsFailure(error) {
  return {
    type: GET_FLOWS_FAILURE,
    error
  }
}

export function fetchFlows() {
  return function(dispatch) {
    dispatch(getFlowsRequest());

    return fetch('flows.json')
      .then(response => response.json())
      .then(json =>
        dispatch(getFlowsSuccess(json))
      )
  }
}

export function loadFlow(id) {

  return (dispatch, getState) => {
    const flow = getState()
      .flows.data.filter(x => x.id == id).get(0);
    if (flow) {
      dispatch(loadFlowSuccess(flow));
    }
    else {
      dispatch(loadFlowError());
    }
  };
}

export function loadFlowSuccess(flow) {
    flow.components.map(x => x.uuid = guid())
    return {
        type: LOAD_FLOW,
        flow
      };
}

export function loadFlowError() {
  return {
      type: ERROR_LOADING_FLOW
    }
}

export function selectModalJob(jobId) {
  return{
    type: SELECT_MODAL_JOB,
    jobId
  }
}

export function updateConfiguredJob(jobUuid, attributes) {
  return {
    type: UPDATE_CONFIGURED_JOB,
    jobUuid,
    attributes
  }
}