import { connect } from 'react-redux'
import { addComponent } from '../actions/actions'
import ComponentList from '../components/ComponentList'

const mapStateToProps = (state) => {
  return {
    components: state.components
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrag: (id) => {
      console.log('a');
    }
  }
}

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentList);

export default ComponentContainer