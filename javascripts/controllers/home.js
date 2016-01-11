app.controller("HomeCtrl", ["$scope", "$http", "$location", "$sce", 
  function($scope, $http, $location, $sce) {
   $scope.calImgSrc = $sce.trustAsResourceUrl('img/calendar.png');
   $scope.rickImgSrc = $sce.trustAsResourceUrl('img/rickClr.jpg');
   $scope.quoteImgSrc = $sce.trustAsResourceUrl('img/quote.png');


    
}]); //closes lines 1-2



