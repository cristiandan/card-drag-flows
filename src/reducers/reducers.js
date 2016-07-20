import { combineReducers } from 'redux'

import componentsReducer from './componentsReducer'
import configuredComponentsReducer from './configuredComponentsReducer'
import flowsReducer from './flowsReducer'
import rawDataReducer from './rawDataReducer'

const reducers = combineReducers({
  components: componentsReducer,
  configuredComponents: configuredComponentsReducer,
  flows: flowsReducer,
  rawJsonData: rawDataReducer
});

export default reducers