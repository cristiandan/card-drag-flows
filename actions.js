/*
 * action types
 */

export const ADD_CONFIGURED_JOB = 'ADD_CONFIGURED_JOB'
export const MOVE_CONFIGURED_JOB = 'MOVE_CONFIGURED_JOB'
export const ADD_JOB = 'ADD_JOB'


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
