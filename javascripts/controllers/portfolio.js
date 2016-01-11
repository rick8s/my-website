app.controller("PortfolioCtrl", ["$scope", "$http", "$location", "$sce", 
  function($scope, $http, $location, $sce) {
   $scope.calImgSrc = $sce.trustAsResourceUrl('img/calendar.png');    
}]); //closes lines 1-2