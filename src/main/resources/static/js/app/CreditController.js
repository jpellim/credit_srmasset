'use strict';

angular.module('creditApp').controller('CreditController',
    ['CreditService', '$scope',  function( CreditService, $scope) {

        var self = this;
        self.credit = {};
        self.credits=[];

        self.submit = submit;
        self.getAllCredits = getAllCredits;
        self.createCredit = createCredit;
        self.updateCredit = updateCredit;
        self.removeCredit = removeCredit;
        self.editCredit = editCredit;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
     
        $scope.riscos = [{ Id: 'A', Name: 'A', Selected: false }, 
        	             { Id: 'B', Name: 'B', Selected: false }, 
        	             { Id: 'C', Name: 'C', Selected: false }];
     
        $scope.getTaxaJuros = function () {
        	if (self.credit.tipoRisco == "A") {
           		$scope.taxaJuros = 0;
        		$scope.ctrl.credit.taxaJuros = 0;
            }
        	else if (self.credit.tipoRisco == "B") {
        		$scope.ctrl.credit.taxaJuros = 10;
        		$scope.taxaJuros = 10;
        	}
        	else {
        		$scope.taxaJuros = 20;
        		$scope.ctrl.credit.taxaJuros = 20;
        	}
        } 
        
        function submit() {
            console.log('Submitting');
            if (self.credit.codigo === undefined || self.credit.codigo === null) {
                console.log('Saving New Credit', self.credit);
                createCredit(self.credit);
            } else {
                updateCredit(self.credit, self.credit.codigo);
                console.log('Credit updated with id ', self.credit.codigo);
            }
        }

        function createCredit(credit) {
            console.log('About to create Credit');
            CreditService.createCredit(credit)
                .then(
                    function (response) {
                        console.log('Credit created successfully');
                        self.successMessage = 'Crédito criado com sucesso!';
                        self.errorMessage='';
                        self.done = true;
                        self.credit={};                  
                		$scope.taxaJuros = '';
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Credit');
                        self.errorMessage = 'Error while creating Credit: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }
 
        function updateCredit(Credit, id){
            console.log('About to update Credit');
            CreditService.updateCredit(Credit, id)
                .then(
                    function (response){
                        console.log('Crédito atualizado com sucesso!');
                        self.successMessage='Crédito atualizado com sucesso!';
                        self.errorMessage='';
                        self.done = true;
                        self.credit={};
                 		$scope.taxaJuros = '';
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Credit');
                        self.errorMessage='Error while updating Credit '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }
 
        function removeCredit(id){
            console.log('About to remove Credit with id '+id);
            CreditService.removeCredit(id)
                .then(
                    function(){
                        console.log('Credit   removed successfully');
                        self.successMessage='';
                        $scope.taxaJuros = '';
                    },
                    function(errResponse){
                        console.error('Error while removing Credit '+id +', Error :'+errResponse.data);
                    }
                );
        }
 
        function getAllCredits(){
            return CreditService.getAllCredits();
        }

        function editCredit(id) {
            self.successMessage='';
            self.errorMessage='';
            CreditService.getCredit(id).then(
                function (Credit) {
                    self.credit = Credit;
                    $scope.taxaJuros = self.credit.taxaJuros;
                },               
                function (errResponse) {
                    console.error('Error while removing Credit ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.Credit={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);