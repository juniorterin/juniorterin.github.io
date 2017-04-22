var app = angular.module('app', ["ngAnimate", "ngRoute"]);
 
app.config(function($routeProvider, $locationProvider)
{

 
   $routeProvider
 
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
	  title: 'Portfólio e laboratório',
   })
   
      .when('/eu', {
      templateUrl : 'app/views/eu.html',
      controller  : 'EuCtrl',
	  title: 'Sobre',
   })
   
	.when('/habilidades', {
      templateUrl : 'app/views/habilidades.html',
      controller  : 'HabilidadesCtrl',
	  title: 'Habilidades',
   })
   
	.when('/projetos', {
      templateUrl : 'app/views/projetos.html',
      controller  : 'ProjetosCtrl',
	  title: 'Projetos',
   })
 
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
	  title: 'Contato',
   })

   .otherwise ({ redirectTo: '/' });
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

function Ctrl($scope)
{
    $scope.date = new Date();
}



