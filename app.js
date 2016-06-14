import { createStore } from 'redux'
import jobsApp from './reducers'

var React = require('react');
var ReactDOM = require('react-dom');
var RootPannel = require('./RootPannel');
var observe = require('./Game').observe;

var store = createStore(jobsApp);

var rootEl = document.getElementById('root');

//observe(function (knightPosition) {
  ReactDOM.render(
    <RootPannel />,
    rootEl
  );
//});




/// test



import { addJob } from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addJob('Learn about actions'))
store.dispatch(addJob('Learn about reducers'))
store.dispatch(addJob('Learn about store'))

// Stop listening to state updates
unsubscribe()