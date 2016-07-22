import {
  componentsProcessor,
  flowsProcessor,
  flowProcessor
} from '../processing/dataProcessor'

import fetch from 'isomorphic-fetch'
import guid from '../utils/guid'

/*
 * action types
 */

export const ADD_CONFIGURED_COMPONENT = 'ADD_CONFIGURED_COMPONENT'
export const MOVE_CONFIGURED_COMPONENT = 'MOVE_CONFIGURED_COMPONENT'
export const ADD_COMPONENT = 'ADD_COMPONENT'
export const GET_COMPONENTS_REQUEST = 'GET_COMPONENTS_REQUEST'
export const GET_COMPONENTS_FAILURE = 'GET_COMPONENTS_FAILURE'
export const GET_COMPONENTS_SUCCESS = 'GET_COMPONENTS_SUCCESS'
export const GET_FLOWS_REQUEST = 'GET_FLOWS_REQUEST'
export const GET_FLOWS_FAILURE = 'GET_FLOWS_FAILURE'
export const GET_FLOWS_SUCCESS = 'GET_FLOWS_SUCCESS'
export const LOAD_COMPONENTS_FROM_FLOW_REQUEST = 'LOAD_COMPONENTS_FROM_FLOW_REQUEST'
export const LOAD_COMPONENTS_FROM_FLOW_SUCCESS = 'LOAD_COMPONENTS_FROM_FLOW_SUCCESS'
export const ERROR_LOADING_FLOW = 'ERROR_LOADING_FLOW'
export const SELECT_MODAL_COMPONENT = 'SELECT_MODAL_COMPONENT'
export const UPDATE_CONFIGURED_COMPONENT = 'UPDATE_CONFIGURED_COMPONENT'
export const POST_CONFIGURED_COMPONENT_DATA_SUCCESS = 'POST_CONFIGURED_COMPONENT_DATA_SUCCESS'
export const POST_CONFIGURED_COMPONENT_DATA_REQUEST = 'POST_CONFIGURED_COMPONENT_REQUEST'
export const CLEAR_FLOW = 'CLEAR_FLOW'

/*
 * action creators
 */

export function addComponent(component) {
  return {
    type: ADD_COMPONENT,
    component
  }
}

export function moveConfiguredComponent(fromIndex, toIndex) {
  return {
    type: MOVE_CONFIGURED_COMPONENT,
    fromIndex,
    toIndex
  }
}

export function addConfiguredComponent(componentId) {
  return (dispatch, getState) => {
    const component = getState()
      .components.data.filter(x => x.id == componentId).get(0);
    if (component) {
      const newComponent = Object.assign({}, component, {uuid: guid()})
      dispatch(addConfiguredComponentSuccess(newComponent));
    }
    else {
      dispatch(addConfiguredComponentError());
    }
  };
}

export function addConfiguredComponentSuccess(component) {
  return {
    type: ADD_CONFIGURED_COMPONENT,
    component
  }
}

export function addConfiguredComponentError() {
  
}

export function getComponentsRequest() {
  return {
    type: GET_COMPONENTS_REQUEST
  }
}

export function getComponentsSuccess(json) {
  return {
    type: GET_COMPONENTS_SUCCESS,
    components: componentsProcessor(json)
  }
}

export function getComponentsFailure(error) {
  return {
    type: GET_COMPONENTS_FAILURE,
    error
  }
}

export function fetchComponents() {
  return function(dispatch) {
    dispatch(getComponentsRequest());

    return fetch('json_mock_data/components.json')
      .then(response => response.json())
      .then(json =>
        dispatch(getComponentsSuccess(json))
      )
  }
}

export function getFlowsRequest() {
  return {
    type: GET_FLOWS_REQUEST
  }
}

export function getFlowsSuccess(json) {
  return {
    type: GET_FLOWS_SUCCESS,
    flows: flowsProcessor(json)
  }
}

export function getFlowsFailure(error) {
  return {
    type: GET_FLOWS_FAILURE,
    error
  }
}

export function fetchFlows() {
  return function(dispatch) {
    dispatch(getFlowsRequest());

    return fetch('json_mock_data/flows2.json')
      .then(response => response.json())
      .then(json =>
        dispatch(getFlowsSuccess(json))
      )
  }
}

export function loadFlow(id) {

  return (dispatch, getState) => {
    const flow = getState()
      .flows.data.filter(x => x.id == id).get(0);
    if (flow) {
      dispatch(loadFlowRequest())
      return fetch('json_mock_data/flows.json')
      .then(response => response.json())
      .then(json =>
        dispatch(loadFlowSuccess(json))
      )
    }
    else {
      dispatch(loadFlowError());
    }
  };
}

export function loadFlowRequest() {
  return {
        type: LOAD_COMPONENTS_FROM_FLOW_REQUEST
      };
}

export function loadFlowSuccess(flow) {
    flow = flowProcessor(flow);
    flow.components.map(x => x.uuid = guid())
      
    return {
        type: LOAD_COMPONENTS_FROM_FLOW_SUCCESS,
        flow
      };
}

export function loadFlowError(error) {
  return {
      type: ERROR_LOADING_FLOW,
      error
    }
}

export function selectModalComponent(componentId) {
  return{
    type: SELECT_MODAL_COMPONENT,
    componentId
  }
}

export function updateConfiguredComponent(componentUuid, attributes) {
  return {
    type: UPDATE_CONFIGURED_COMPONENT,
    componentUuid,
    attributes
  }
}

export function postConfiguredComponentData() {
  return (dispatch, getState) => {

    dispatch(postConfiguredComponentDataRequest());

    const configuredFlowData = getState()
      .configuredComponents.data.toJS();
    if (configuredFlowData) {
      // post data here
      console.log(configuredFlowData);
      dispatch(postConfiguredComponentDataSuccess(configuredFlowData));
    }
    else {
      //dispatch(Error());
    }
  };
}

export function postConfiguredComponentDataRequest() {
  return {
    type: POST_CONFIGURED_COMPONENT_DATA_REQUEST
  }
}

export function postConfiguredComponentDataSuccess(data) {
  return {
    type: POST_CONFIGURED_COMPONENT_DATA_SUCCESS,
    data
  }
}

export function clearFlow() {
  return {
    type: CLEAR_FLOW
  }
}