import { List } from 'immutable'
import { ADD_CONFIGURED_COMPONENT, MOVE_CONFIGURED_COMPONENT, SELECT_MODAL_COMPONENT, UPDATE_CONFIGURED_COMPONENT, POST_CONFIGURED_COMPONENT_DATA_SUCCESS, LOAD_COMPONENTS_FROM_FLOW_REQUEST, LOAD_COMPONENTS_FROM_FLOW_SUCCESS, CLEAR_FLOW } from '../actions/actions'
import guid from '../utils/guid'

var defaultConfiguredComponentsList = List();

function getEmptyConfiguredComponentsState() {
  return Object.assign({}, {
          isFetching: false,
          data: List(defaultConfiguredComponentsList),
          selectedModalComponent: null,
          edited: false,
          schemaChanged: false,
          schemaId: guid()
        })
}

function configuredComponentsReducer(state = getEmptyConfiguredComponentsState(), action) {
    switch(action.type) {
      case ADD_CONFIGURED_COMPONENT:
        const newStateData = state.data.push(action.component);

        return Object.assign({},state, {data: newStateData, edited: true, schemaChanged: true});
      case MOVE_CONFIGURED_COMPONENT:
        const selectedComponent = state.data.get(action.fromIndex);  
        const newData = state.data.delete(action.fromIndex).insert(action.toIndex,selectedComponent);

        return Object.assign({},state, {data: newData, edited: true, schemaChanged: true});
      case LOAD_COMPONENTS_FROM_FLOW_SUCCESS:
        console.log(action.flow);
        return Object.assign({},state,{data: List(action.flow.components), edited: false, schemaChanged: false, schemaId: action.flow.id});
      case SELECT_MODAL_COMPONENT:
        const selected = state.data.filter(x => x.uuid == action.componentId).get(0);

        return Object.assign({}, state, {selectedModalComponent: selected})
      case UPDATE_CONFIGURED_COMPONENT:
        const selectedComponentIndex = state.data.findKey(x => x.uuid == action.ComponentUuid);
        const selectedComponentToUpdate = state.data.get(selectedComponentIndex);
        const updatedComponent = Object.assign({}, selectedComponentToUpdate, { parameters: action.attributes })
        return Object.assign({},state,{data: state.data.set(selectedComponentIndex,updatedComponent), edited: true});
      
      case POST_CONFIGURED_COMPONENT_DATA_SUCCESS: //edit when use post
        return Object.assign({},state, {edited: false, schemaChanged: false});
      
      case CLEAR_FLOW:
        return getEmptyConfiguredComponentsState();

      default:
        return state;
  }
}

export default configuredComponentsReducer