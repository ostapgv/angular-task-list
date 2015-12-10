function TaskListController ($scope, TasksService, $location, $routeParams, $compile) {
  this.TasksService = TasksService;
  this.tasks = TasksService.getAllTasks();

  this.$scope = $scope;
  this.$location = $location;

  this.predicate = this.predicate || 'title';
  this.reverse = this.reverse || true;
  this.search = this.search || '';

  this.modalShown = false;
  console.log('TaskListController');

  // Route contains the task id (show modal)
  if($routeParams.id) {
    this.compiledModalDirective = $compile('<modal-dialog/>');
    this.modalDirectiveElement = this.compiledModalDirective(this.$scope);
    $('body').append(this.modalDirectiveElement);

    this.task = this.getTaskById($routeParams.id) || {};

    this.defaultPrioroty = 1;
    this.defaultDate = new Date();
    this.defaultDate.setDate(this.defaultDate.getDate() + 1);
    this.defaultIsActive = true;
    this.currentIsActive = (typeof this.task.isActive !== 'undefined') ?
      this.task.isActive :
      this.task.defaultIsActive;
  }
}

angular.extend(TaskListController.prototype, {
  // Show new task
  showNewTask: function() {
    this.$location.url('/task/new');
  },
  // Show task details redirection to the task's url
  showTaskDetails: function(id) {
    this.$location.url('/task/'+id);
  },
  // Show task list by redirection to the tasks url
  showTasks: function() {
    this.$location.url('/');
  },
  // Getting task by it's id
  getTaskById: function(id) {
    var matchedTasks = this.tasks.filter(function(task) {
      return task.id === id;
    });
    return matchedTasks[0];
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
  },
  // Save the task
  saveTask: function() {
    var task = {
      'id': this.task.id || this.TasksService.guid(),
      'title': this.task.title || '',
      'priority': this.task.priority,
      'endDate': this.task.endDate,
      'isActive': this.task.isActive || false,
      'description': this.task.description
    };
    this.TasksService.setTask(task);
    this.closeModal();
  },
  // Remove the task by id
  removeTask: function(id) {
    this.TasksService.removeTask(id);
    var taskIdx = this.tasks.indexOf(this.getTaskById(id));
    if(taskIdx > -1) {
      this.tasks.splice(taskIdx, 1);
    }
  },
  // Order tasks
  order: function(predicate) {
    this.reverse = (this.predicate === predicate) ? !this.reverse : false;
    this.predicate = predicate;
  },
  // Task field validation
  isInvalid: function(field){
    return this.$scope.taskForm[field].$invalid && this.$scope.taskForm[field].$dirty;
  },
  // Close modal dialog with the task details
  closeModal: function() {
    this.$scope.$destroy();
    $('modal-dialog').empty();
    this.showTasks();
  }

});

app.controller('TaskListController', ['$scope', 'TasksService', '$location', '$routeParams', '$compile', TaskListController]);
