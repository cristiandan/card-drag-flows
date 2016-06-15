var React = require('react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
import ConfiguredJobContainer from './ConfiguredJobContainer'

import JobContainer from './JobContainer'

var RootPannel = React.createClass({
    render: function () {
        return (
          <div style={{backgroundColor:'red'}}>
            <JobContainer/>
            <ConfiguredJobContainer/>
          </div>  
        );
    }
});


module.exports = DragDropContext(HTML5Backend)(RootPannel);