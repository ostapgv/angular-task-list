function TaskListController ($scope, TasksService, $location) {
  this.TasksService = TasksService;
  this.tasks = TasksService.getAllTasks();

  this.$scope = $scope;
  this.$location = $location;

  this.predicate = 'title';
  this.reverse = true;
  this.isActiveFilter = undefined;
  this.search = '';

}

angular.extend(TaskListController.prototype, {
  // Order tasks
  order: function(predicate) {
    this.reverse = (this.predicate === predicate) ? !this.reverse : false;
    this.predicate = predicate;
  },
  // Show task details redirection to the task's url
  showTaskDetails: function(id) {
    this.$location.url('/task/'+id);
  },
  // Get the array of filtered tasks, based on isActiveFilter
  getFilteredTasks: function(isActiveFilter) {
    if(isActiveFilter === undefined) {
      return this.tasks;
    }
    var filteredTasks = this.tasks.filter(function(task) {
      return isActiveFilter === task.isActive;
    });
    return filteredTasks;
  }

});

app.controller('TaskListController', ['$scope', 'TasksService', '$location', TaskListController]);
