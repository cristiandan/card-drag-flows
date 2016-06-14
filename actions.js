/*
 * action types
 */

export const ADD_JOB = 'ADD_JOB'
export const MOVE_JOB = 'MOVE_JOB'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/*
 * action creators
 */

export function addJob(job) {
  return { type: ADD_JOB, job }
}

export function moveJob(fromIndex,toIndex) {
  return { type: MOVE_JOB, fromIndex, toIndex }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
