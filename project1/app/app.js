var app = angular.module("myApp",["ui.router"]);
//to enable routing we should inject ui.routing in the module.
app.config(function ($stateProvider,$urlRouterProvider)
{
  $urlRouterProvider.otherwise("/home");
  $stateProvider
      .state('home',{url:"/home", templateUrl:'templates/home.html', controller:'homeController'})

      .state('electronics',{url:"/ele", templateUrl:'templates/electronics.html', controller:'gadgetsController'})

      .state('apparel',{url:"/apparel", templateUrl:'templates/apparel.html'})
      .state('furniture',{url:"/furniture",templateUrl:'templates/furniture.html'})
      .state('contactus',{url:"/contactus",templateUrl:'templates/contactus.html'})



});