app.controller("PortfolioCtrl", ["$scope", "$http", "$location", "$sce", 
  function($scope, $http, $location, $sce) {
   $scope.calImgSrc = $sce.trustAsResourceUrl('img/calendar.png'); 
   $scope.toolImgSrc = $sce.trustAsResourceUrl('img/toolshed.png'); 

}]); //closes lines 1-2