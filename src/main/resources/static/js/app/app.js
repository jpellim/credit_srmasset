var app = angular.module('creditApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/credit',
    Credit_SERVICE_API : 'http://localhost:8080/credit/credito/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'CreditController',
                controllerAs:'ctrl',
                resolve: {
                    Credits: function ($q, CreditService) {
                        console.log('Load all Credits');
                        var deferred = $q.defer();
                        CreditService.loadAllCredits().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);

