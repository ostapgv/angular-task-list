var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'TaskListController as vm',
      templateUrl: 'js/views/tasks.html'
    })
    .when('/task/:id', {
      controller: 'TaskController as vm',
      templateUrl: 'js/views/task.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.filter('customSort',function(){
    function sort (a, b) {
        if (a > b) { return 1; }
        if (a < b) { return -1; }

        return 0;
    }

    return function(arrInput, prop) {
        var arr = arrInput.sort(function(a, b) {
            return sort(+a[prop], +b[prop]);
        });
        return arr;
    };
});