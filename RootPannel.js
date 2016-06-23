import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ConfiguredJobContainer from './ConfiguredJobContainer'

import JobContainer from './JobContainer'

var RootPannel = React.createClass({
    render: function () {
        return (
          <div className="wrapper uk-grid data-uk-grid-margin">
            <JobContainer/>
            <ConfiguredJobContainer/>
          </div>  
        );
    }
});


export default DragDropContext(HTML5Backend)(RootPannel)