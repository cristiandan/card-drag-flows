import { ADD_JOB, MOVE_JOB  } from './actions'
var Immutable = require('immutable');
import { combineReducers } from 'redux'

var jobsList = Immutable.List([{name: "ab1",id:32},{name: "ab2",id:21}, {name:"ab3",id:55}]);

const initialState = {
  jobs: jobsList
}

const jobsApp = combineReducers({
  jobs: jobsReducer
});

function jobsReducer(state = Immutable.List(), action) {
    switch(action.type) {
      case ADD_JOB:
        return state.push(action.job);
      case MOVE_JOB:
        return state; // modify here the move job
      default:
        return state;
  }
}

export default jobsApp