app.service('TasksService', function () {

  this.getAllTasks = function() {
    var tasks = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;
    var task;
    while ( i-- ) {
      task = this.getTask(keys[i]);
      if(task) {
        tasks.push(task);
      }
    }
    return tasks;
  };

  this.removeAllTasks = function() {
    localStorage.clear();
  };

  this.getTask = function(id) {
    try {
      var task = angular.fromJson(localStorage.getItem(id));
      task.endDate = new Date(task.endDate);
      return task;
    } catch(e) {
      console.dir(e);
    }
  };

  this.setTask = function(task) {
    localStorage.setItem(task.id || this.guid(), angular.toJson(task));
  };

  this.removeTask = function(id) {
    localStorage.removeItem(id);
  };
  // GUID generator
  this.guid = function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  };

  // Test data initialization
/*
  this.removeAllTasks();
  var testTasksData = [
    {
      'id': 'de772c9e-9d18-1c96-77ac-7bc52d92a2c9',
      'title': 'Create tests for tests',
      'priority': 10,
      'endDate': new Date(2013, 9, 22),
      'isActive': true,
      'description': 'Create tests for the each test recursively and endless'
    },
    {
      'id': 'f4e7920a-bfac-8c15-23c1-49786b661e0a',
      'title': 'Make the cofee',
      'priority': 3,
      'endDate': new Date(2013, 9, 10),
      'isActive': false,
      'description': 'I\'m not so alive without it'
    },
    {
      'id': 'f3e7520a-3fac-8c15-23c1-49786b661e0g',
      'title': 'Make a tea',
      'priority': 2,
      'endDate': new Date(2013, 9, 11),
      'isActive': false,
      'description': 'I\'m not so alive without it'
    }
  ];
  var i = 0;
  var l = testTasksData.length;
  for(; i < l; i++) {
    this.setTask(testTasksData[i]);
  }
*/

});
