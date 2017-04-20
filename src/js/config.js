(function() {

  'use strict';

  angular
    .module('denver-cloud.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: './src/js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      css: 'src/css/main.css'
    })
    .when('/loggedin', {
      templateUrl: './src/js/components/loggedin/loggedin.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      css: 'src/css/main.css'
    });
  }

})();
