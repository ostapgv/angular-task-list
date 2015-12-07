function TaskController ($scope, Tasks, $routeParams) {
  this.task = Tasks[$routeParams.id] || {};
}
TaskController.prototype.removeAllTasks = function() {
  localStorage.clear();
}
TaskController.prototype.getTask = function(id) {
  return JSON.parse(localStorage.getItem(id));
};
TaskController.prototype.setTask = function(task) {
  localStorage.setItem(task.id || guid(), JSON.stringify(task));
};
TaskController.prototype.removeTask = function(id) {
  localStorage.removeItem(id);
};
  // GUID generator
TaskController.prototype.guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

app.controller('TaskController', ['$scope', 'Tasks', '$routeParams', TaskController]);
