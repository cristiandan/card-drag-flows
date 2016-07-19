import { connect } from 'react-redux'
import { addConfiguredComponent, moveConfiguredComponent, selectModalComponent, postConfiguredComponentData, updateConfiguredComponent } from '../actions/actions'
import ConfiguredComponentList from '../components/ConfiguredComponentList'

const mapStateToProps = (state) => {
  return {
    components: state.configuredComponents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMove: (dragIndex, hoverIndex) => {
      dispatch(moveConfiguredComponent(dragIndex, hoverIndex))
    },
    onDrop: (componentId) => {
      dispatch(addConfiguredComponent(componentId))
    },
    onSelectModalComponent: (componentId) => {
      dispatch(selectModalComponent(componentId))
    },
    onClickPostData: () => {
      dispatch(postConfiguredComponentData())
    },
    onSave: (uuid, attributes) => {
      dispatch(updateConfiguredComponent(uuid,attributes));
    }
  }
}

const ConfiguredComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfiguredComponentList);

export default ConfiguredComponentContainer