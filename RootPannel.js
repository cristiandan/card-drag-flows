var React = require('react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var JobPannel = require('./JobPannel');
var ConfigPannel = require('./ConfigPannel');

var RootPannel = React.createClass({
    render: function () {
        return (
          <div style={{backgroundColor:'red'}}>
            <JobPannel/>
            <ConfigPannel/>
          </div>  
        );
    }
});


module.exports = DragDropContext(HTML5Backend)(RootPannel);