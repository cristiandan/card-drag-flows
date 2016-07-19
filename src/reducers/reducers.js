import { combineReducers } from 'redux'

import componentsReducer from './componentsReducer'
import configuredComponentsReducer from './configuredComponentsReducer'
import flowsReducer from './flowsReducer'

const reducers = combineReducers({
  components: componentsReducer,
  configuredComponents: configuredComponentsReducer,
  flows: flowsReducer
});

export default reducers