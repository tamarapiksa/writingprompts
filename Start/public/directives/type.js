writingApp.directive('typedUp', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      $(element).typed(scope.$eval(attrs.typedUp));
    }
  };
});
    