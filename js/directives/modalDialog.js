app.directive('modalDialog', ['$document', '$compile', function($document, $compile) {
  return {
    restrict: 'E',
    controller: 'TaskController',
    templateUrl: './js/views/task.html'
  };
}]);