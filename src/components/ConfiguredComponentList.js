import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ConfiguredComponent from './ConfiguredComponent'
import { DropTarget } from 'react-dnd';
import * as ItemTypes from '../constants/itemTypes'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'
import ComponentModal from '../containers/ComponentModal'
import SaveModal from '../containers/SaveModal'
import RootModal from '../containers/RootModal'

var target = {
    
  canDrop: function (props) {
    return true;
  },

  drop: function (props, monitor, component) {
    var item = monitor.getItem();
    props.onDrop(item.id);
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};


class ConfigComponentList extends React.Component {
    constructor (props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeSaveAsModal = this.closeSaveAsModal.bind(this);
    this.onClickOpenSaveAsModal = this.onClickOpenSaveAsModal.bind(this);
    this.state = {isShowingModal:false, modalComponentId: null};
    this.props = props;
  }

  openModal (componentId) {
    this.setState({isShowingModal: true, modalComponentId: componentId});
    this.props.onSelectModalComponent(componentId);
  }

  closeModal() {
    this.setState({isShowingModal:false});
  }

  closeSaveAsModal() {
    this.setState({isShowingSaveAsModal:false});
  }

  onClickOpenSaveAsModal() {
    this.setState({isShowingSaveAsModal:true});
  }

  render() {
    const components = this.props.components;
    const onDrag = this.props.onDrag;
    const connectDropTarget = this.props.connectDropTarget;
    const onClickPostData = this.props.onClickPostData;
    const onMove = this.props.onMove;
    const onSave = this.props.onSave;
    const edited = this.props.components.edited;
    const onClear = this.props.onClear;
    const onClickOpenSaveAsModal = this.onClickOpenSaveAsModal;
    const closeSaveAsModal =this.closeSaveAsModal;
    const onSaveAsName = this.props.onSaveAsName;

    return connectDropTarget (
      <div>
      <div id="configuredcomponentlist" style={{width:"100%", height:"100%"}} className="container uk-grid uk-grid-medium uk-grid-width-xlarge-1-6 uk-grid-width-large-1-5 uk-grid-width-medium-1-4 uk-grid-width-small-1-3 uk-vertical-align-middle" data-uk-grid-margin data-uk-observe>
        {components.data.map( (component,index) =>
          <ConfiguredComponent uuid={component.uuid} name={component.name} id={component.id} key={component.uuid} index={index} onMove={(dragIndex, hoverIndex) => onMove(dragIndex, hoverIndex)} onClick={() => this.openModal(component.uuid)}/>
        )}
        { this.state.isShowingModal && components.selectedModalComponent ? 
          <ModalContainer onClose={this.closeModal}>

              <ComponentModal component={components.selectedModalComponent} onClose={this.closeModal} onSave={onSave}/>

          </ModalContainer> : "" }
      </div>
      <br/><br/>
      <button onClick={onClickPostData} disabled={!edited}>Save</button>
      <button onClick={onClickOpenSaveAsModal} disabled={!edited}> Save As </button>
        { this.state.isShowingSaveAsModal ?
        <ModalContainer onClose={this.closeSaveAsModal}>
          <SaveModal onClose={this.closeSaveAsModal} onSave={onSaveAsName}></SaveModal>
        </ModalContainer>: "" }
        <button onClick={onClear}>Clear</button>
        <RootModal/>
      </div>
      )
  }
}

export default DropTarget(ItemTypes.COMPONENT, target, collect)(ConfigComponentList);