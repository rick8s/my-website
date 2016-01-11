var app = angular.module('8sPlace', ['ngRoute', 'pageslide-directive']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'HomeCtrl'
      }).
      when('/frameworks', {
        templateUrl: 'partials/technologies.html',
        controller: 'HomeCtrl'
      }).
      when('/portfolio', {
        templateUrl: 'partials/portfolio.html',
        controller: 'PortfolioCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'HomeCtrl'
      }).
      otherwise ({
        redirectTo: '/'
      });

      
}]);