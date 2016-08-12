import { combineReducers } from 'redux'

import componentsReducer from './componentsReducer'
import configuredComponentsReducer from './configuredComponentsReducer'
import flowsReducer from './flowsReducer'
import rawDataReducer from './rawDataReducer'
import dialogsReducer from './dialogsReducer'

const reducers = combineReducers({
  components: componentsReducer,
  configuredComponents: configuredComponentsReducer,
  flows: flowsReducer,
  rawJsonData: rawDataReducer,
  dialogs: dialogsReducer
});

export default reducers