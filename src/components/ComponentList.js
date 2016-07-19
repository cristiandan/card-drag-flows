import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Component from './Component'

// scoate onDrag
const ComponentList = ({ components, onDrag }) => {
    return (
      <div id="componentlist" className="container uk-grid uk-grid-small uk-grid-width-1-1 uk-vertical-align-middle uk-margin-bottom uk-scrollable-box" data-uk-grid-margin data-uk-observe>
        {components.data.map(component =>
          <Component name={component.name} id={component.id} key={component.id} onDrag={() => onDrag(component.id)}/>
        )}
      </div>
  )
};

ComponentList.propTypes = {
  components: PropTypes.object.isRequired,
  onDrag: PropTypes.func.isRequired
}

export default ComponentList;