import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
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


export default DragDropContext(HTML5Backend)(RootPannel)