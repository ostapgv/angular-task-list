var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'TaskListController as vm',
      templateUrl: 'js/views/tasks.html'
    })
    .when('/task/:id', {
      controller: 'TaskListController as vm',
      templateUrl: 'js/views/tasks.html'
    //  controller: 'TaskController as vm',
    //  templateUrl: 'js/views/task.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
