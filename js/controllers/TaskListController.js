function TaskListController ($scope, Tasks, $location) {
  this.$scope = $scope;
  this.$location = $location;

  this.predicate = 'title';
  this.reverse = true;

  this.sortProps = {field: 0, type: 0};
  this.tasks = Tasks;

  //this.sortTasks();
}

// Order tasks
TaskListController.prototype.order = function(predicate) {
  this.reverse = (this.predicate === predicate) ? !this.reverse : false;
  this.predicate = predicate;
};
// Order comparator
//TaskListController.prototype.compare()

/*
// Return 'checked' or '' depands on task's 'isActive' property
TaskListController.prototype.checked = function(id) {
  if(this.tasks && this.tasks[id] && this.tasks[id].isActive) {
    return 'checked';
  }
  return '';
};
*/
// Show task details redirection to the task's url
TaskListController.prototype.showTaskDetails = function(id) {
  this.$location.url('/task/'+id);
};

/*
// Init sort properties
TaskListController.prototype.sortTypes = ['ASC', 'DESC', 'NONE'];
TaskListController.prototype.sortFields = ['title', 'priority', 'endDate'];
// Sort task by the field
TaskListController.prototype.sortTasks = function(field) {
  // The same field
  if(this.sortFields[this.sortProps.field] === field) {
    var curSortType = this.sortProps.type;
    // Changing the sort type
    if(++this.sortProps.type >= this.sortTypes.length) {
      this.sortProps.type = 0;
    }
  // Other field
  } else {
    var newFieldIdx = this.sortFields.indexOf(field);
    // If the field exists, set it and reset the sort type to 0 ('ASK')
    if(newFieldIdx > -1) {
      this.sortProps.field = newFieldIdx;
      this.sortProps.type = 0;
    }
  }
  console.log(this.sortProps);
};
*/

app.controller('TaskListController', ['$scope', 'Tasks', '$location', TaskListController]);
