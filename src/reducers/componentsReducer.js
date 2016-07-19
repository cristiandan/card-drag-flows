import { List } from 'immutable'
import { ADD_COMPONENT, GET_COMPONENTS_REQUEST, GET_COMPONENTS_SUCCESS, GET_COMPONENTS_FAILURE } from '../actions/actions'

var defaultComponentsList = List([{name: "ab1",id:'32'},{name: "ab2",id:'21'}, {name:"ab3",id:'55'}]);

function getEmptyComponentsState() {
  return Object.assign({}, {
          isFetching: false,
          data: List(defaultComponentsList)
        })
}

function componentsReducer(state = getEmptyComponentsState(), action) {
    switch(action.type) {
      case ADD_COMPONENT:
        return state.data.push(action.component);
      case GET_COMPONENTS_REQUEST:
        return Object.assign({},state,{isFetching:true});
      case GET_COMPONENTS_SUCCESS:
        return Object.assign({}, {
          isFetching: false,
          data: List(action.components)
        });
      case GET_COMPONENTS_FAILURE:
        return state;
      default:
        return state;
  }
}

export default componentsReducer