import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ConfiguredJobContainer from './ConfiguredJobContainer'
import FlowContainer from './FlowContainer'

import JobContainer from './JobContainer'

var RootPannel = React.createClass({
    render: function () {
        return (
          <div id="content" className="uk-container">
              <div className="wrapper uk-grid" data-uk-grid-margin data-uk-observe>
                <div className="uk-width-1-5">
                    <JobContainer/>
                </div>
                <div className="uk-width-4-5">
                    <ConfiguredJobContainer/>
                </div>
              </div>
              <div className="wrapper uk-grid" data-uk-grid-margin data-uk-observe>
                <div className="uk-width-1-5">
                    <FlowContainer/>
                </div>
                <div className="uk-width-4-5">
                    results
                    text
                    text
                </div>
              </div>  
          </div>
        );
    }
});


export default DragDropContext(HTML5Backend)(RootPannel)