'use strict';

angular.module('creditApp').factory('CreditService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllCredits: loadAllCredits,
                getAllCredits: getAllCredits,
                getCredit: getCredit,
                createCredit: createCredit,
                updateCredit: updateCredit,
                removeCredit: removeCredit
            };

            return factory;

            function loadAllCredits() {
                console.log('Fetching all Credits');
                var deferred = $q.defer();
                $http.get(urls.Credit_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all Credits');
                            $localStorage.credits = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading Credits');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllCredits(){
                return $localStorage.credits;
            }

            function getCredit(id) {
                console.log('Fetching Credit with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.Credit_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Credit with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Credit with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createCredit(Credit) {
                console.log('Creating Credit');
                var deferred = $q.defer();
                $http.post(urls.Credit_SERVICE_API, Credit)
                    .then(
                        function (response) {
                            loadAllCredits();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating Credit : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateCredit(Credit, id) {
                console.log('Updating Credit with id '+id);
                var deferred = $q.defer();
                $http.put(urls.Credit_SERVICE_API + id, Credit)
                    .then(
                        function (response) {
                            loadAllCredits();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Credit with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeCredit(id) {
                console.log('Removing Credit with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.Credit_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllCredits();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Credit with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);