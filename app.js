import React from 'react'
import ReactDOM from 'react-dom'
import RootPannel from './RootPannel'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import jobsApp from './reducers'
import { fetchJobs, fetchFlows } from './actions'


var store = createStore(
  jobsApp, 
  applyMiddleware(thunkMiddleware)
);

var rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <RootPannel />
    </Provider>,
    rootEl
);

store.dispatch(fetchJobs('reactjs')).then(() =>
  console.log(store.getState())
)

store.dispatch(fetchFlows('reactjs')).then(() =>
  console.log(store.getState())
)