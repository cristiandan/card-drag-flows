import jobsProcessor from './jobsProcessor';
import fetch from 'isomorphic-fetch'

/*
 * action types
 */

export const ADD_CONFIGURED_JOB = 'ADD_CONFIGURED_JOB'
export const MOVE_CONFIGURED_JOB = 'MOVE_CONFIGURED_JOB'
export const ADD_JOB = 'ADD_JOB'
export const GET_JOBS_REQUEST = 'GET_JOBS_REQUEST'
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'


/*
 * action creators
 */

export function addJob(job) {
  return { type: ADD_JOB, job }
}

export function moveConfiguredJob(fromIndex,toIndex) {
  return { type: MOVE_CONFIGURED_JOB, fromIndex, toIndex }
}

export function addConfiguredJob(job) {
  return { type: ADD_CONFIGURED_JOB, job }
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
    return function (dispatch) {
      dispatch(getJobsRequest());

      return fetch('http://localhost:5000/components')
          .then(response => response.json())
          .then(json => 
              dispatch(getJobsSuccess(json))
          )
    }
}

