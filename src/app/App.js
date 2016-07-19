import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import RootContainer from '../containers/RootContainer'
import reducers from '../reducers/reducers'
import { fetchComponents, fetchFlows } from '../actions/actions'

var store = createStore(
  reducers, 
  applyMiddleware(thunkMiddleware)
);

var rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    rootEl
);

store.dispatch(fetchComponents('reactjs')).then(() =>
  console.log(store.getState())
)

store.dispatch(fetchFlows('reactjs')).then(() =>
  console.log(store.getState())
)