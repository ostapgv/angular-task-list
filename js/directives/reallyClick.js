app.directive('reallyClick', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        var message = attrs.reallyMessage;
        if (message && confirm(message)) {
          scope.$apply(attrs.reallyClick);
        }
      });
    }
  };
}]);
