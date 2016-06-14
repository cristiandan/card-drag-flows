var configuredJobs = [];
var observer = null;

exports.setObserver = function (obs) {
    observer = obs;
    emitChange();
}

function emitChange() {
    observer(configuredJobs);
}

exports.addConfiguredJob = function (job) {
    
    job.key = guid();
    
    configuredJobs.push(job);
    emitChange();
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}