function TaskController ($scope, TasksService, $location, $routeParams) {
  this.TasksService = TasksService;
  this.$location = $location;
  this.tasks = TasksService.getAllTasks();

  var matchedTasks = this.tasks.filter(function(task) {
    return task.id === $routeParams.id;
  });
  this.task = matchedTasks[0] || {};

  this.defaultPrioroty = 1;
  this.defaultDate = new Date();
  this.defaultDate.setDate(this.defaultDate.getDate() + 1);
  this.defaultIsActive = true;
  this.currentIsActive = (typeof this.task.isActive !== 'undefined') ?
    this.task.isActive :
    this.task.defaultIsActive;
}

angular.extend(TaskController.prototype, {

  saveTask: function() {
    var task = {
      'id': this.task.id || this.TasksService.guid(),
      'title': this.task.title || '',
      'priority': this.task.priority,
      'endDate': this.task.endDate,
      'isActive': this.task.isActive,
      'description': this.task.description
    };
    this.TasksService.setTask(task);
    this.$location.url('/');
  }

});

app.controller('TaskController', ['$scope', 'TasksService', '$location', '$routeParams', TaskController]);
