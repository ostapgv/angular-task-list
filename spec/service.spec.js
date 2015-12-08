describe('application', function() {
  'use strict';
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('TasksService', function() {
    var $scope, tasks, controller, newTask, newTaskId, TasksService;

    beforeEach(function() {
      $scope = {};
      controller = $controller('TaskController', { $scope: $scope });
      TasksService = controller.TasksService;
      tasks = TasksService.getAllTasks();
      newTaskId = TasksService.guid();
      newTask  = {
        'id': newTaskId,
        'title': 'new task with guid=' + newTaskId,
        'priority': Math.floor((Math.random() * 10) + 1),
        'endDate': new Date(),
        'isActive': Math.random() < .5,
        'description': 'New task description for the task with guid=' + newTaskId
      };
    });

    it('setTask() method should ADD new task to the local storage', function() {
      TasksService.setTask(newTask);
      var gettedTask = JSON.parse(localStorage.getItem(newTaskId));
      gettedTask.endDate = new Date(gettedTask.endDate);

      expect(gettedTask).toEqual(newTask);
      TasksService.removeTask(newTaskId);
    });

    it('setTask() method should UPDATE new task to the local storage', function() {
      TasksService.setTask(newTask);
      newTask.title = 'new title';
      TasksService.setTask(newTask);

      expect(JSON.parse(localStorage.getItem(newTaskId)).title).toEqual('new title');
      TasksService.removeTask(newTaskId);
    });

    it('getTask() method should GET a task from the local storage', function() {
      TasksService.setTask(newTask);

      expect(TasksService.getTask(newTaskId)).toEqual(newTask);
      TasksService.removeTask(newTaskId);
    });

    it('removeTask() method should REMOVE a task from the local storage', function() {
      TasksService.setTask(newTask);
      TasksService.removeTask(newTaskId);
      expect(TasksService.getTask(newTaskId)).toBe(undefined);
    });

    it('removeTask() method should NOT REMOVE all tasks from the local storage', function() {
      TasksService.setTask(newTask);
      newTask.id = 'newId';
      TasksService.setTask(newTask);

      TasksService.removeTask(newTaskId);
      expect(TasksService.getTask(newTaskId)).toBe(undefined);
      expect(TasksService.getTask(newTask.id)).toEqual(newTask);
      TasksService.removeTask(newTask.id);
    });


  });

  describe('TaskListController', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('TaskListController', { $scope: $scope });
    });

  });

});
