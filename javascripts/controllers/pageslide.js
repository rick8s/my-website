app.controller('PageslideCtrl',['$scope',
  function($scope){
    $scope.checked = false; // This will be binded using the ps-open attribute
    $scope.toggle = function(){
        $scope.checked = !$scope.checked;
    };
}]);