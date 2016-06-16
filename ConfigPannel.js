var React = require('react');
var PropTypes = React.PropTypes;
var addConfiguredJob = require('./Observer').addConfiguredJob;
var setObserver = require('./Observer').setObserver;
import * as ItemTypes from './Constants'
var ConfiguredJob = require('./ConfiguredJob');
var DropTarget = require('react-dnd').DropTarget;

var pannelTarget = {
    
  canDrop: function (props) {
    return true;
  },

  drop: function (props, monitor, component) {
    console.log("drop", props, monitor, component,monitor.getItem());
    var item = monitor.getItem();
    addConfiguredJob({id: item.id, name: item.name});
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

var ConfigPannel = React.createClass({
    getInitialState: function() {
        return {jobs: []};
    },
    componentDidMount: function() {
        setObserver(this.handleDrop);
    },
    handleDrop: function (jobs) {
        this.setState({jobs: jobs});
        console.log(jobs);
    },
    propTypes: {
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired
    },
    moveJob: function (dragIndex, hoverIndex) {
      console.log("move", dragIndex, hoverIndex);
      
      var jobs = this.state.jobs;
      var dragItem = jobs[dragIndex];
      
      jobs.splice(dragIndex,1);
      jobs.splice(hoverIndex, 0, dragItem);

      this.setState({jobs: jobs});
    },
    renderJob: function (job, index) {
        return (
            <ConfiguredJob name={job.name} id={job.id} key={job.key} moveCard={this.moveJob} index={index}/>
        );
    },
    render: function () {
        var renderJob = this.renderJob;
        var connectDropTarget = this.props.connectDropTarget;
        
        var renderedJobs = this.state.jobs.map(function (job, i) {
            return renderJob(job, i);
        });
        
        return connectDropTarget(
            <div style={{backgroundColor: 'yellow', width: '100%', height: '100%'}}>
                {renderedJobs}
            </div>
        );
    }
});

module.exports = DropTarget(ItemTypes.JOB, pannelTarget, collect)(ConfigPannel);