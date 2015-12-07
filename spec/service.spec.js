describe('application', function() {
  'use strict';

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('TaskController', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('TaskController', { $scope: $scope });
    });

    it('setTask() method should ADD new task to the local storage', function() {

    });

    it('setTask() method should UPDATE new task to the local storage', function() {

    });

    it('getTask() method should GET a task from the local storage', function() {

    });

    it('removeTask() method should REMOVE a task from the local storage', function() {

    });

  });

  describe('TaskListController', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('TaskListController', { $scope: $scope });
    });

    it('should be able to add new task to the local storage', function() {
      expect(controller.sortProps).toBeDefined();
    });

  });

});
