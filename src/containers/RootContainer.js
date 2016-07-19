import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import ConfiguredComponentContainer from './ConfiguredComponentContainer'
import FlowContainer from './FlowContainer'
import CodeEditContainer from './CodeEditContainer'
import ComponentContainer from './ComponentContainer'

var RootContainer = React.createClass({
    render: function () {
        return (
          <div id="content" className="uk-container">
              <div className="wrapper uk-grid" data-uk-grid-margin data-uk-observe>
                <div className="uk-width-1-5">
                    <ComponentContainer/>
                </div>
                <div className="uk-width-4-5">
                    <ConfiguredComponentContainer/>
                </div>
              </div>
              <div className="wrapper uk-grid" data-uk-grid-margin data-uk-observe>
                <div className="uk-width-1-5">
                    <FlowContainer/>
                </div>
                <div className="uk-width-4-5">
                    <CodeEditContainer/>
                </div>
              </div>  
          </div>
        );
    }
});


export default DragDropContext(HTML5Backend)(RootContainer)