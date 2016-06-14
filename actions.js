/*
 * action types
 */

export const ADD_JOB = 'ADD_JOB'
export const MOVE_JOB = 'MOVE_JOB'


/*
 * action creators
 */

export function addJob(job) {
  return { type: ADD_JOB, job }
}

export function moveJob(fromIndex,toIndex) {
  return { type: MOVE_JOB, fromIndex, toIndex }
}
