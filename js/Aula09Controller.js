appGeneric.controller('Aula09Controller',['$scope','operacao',function($scope,operacao){


        console.log('A soma é : ' + operacao.somar(10,10));
}]);


appGeneric.controller('Aula09Controller2',['$scope','Pessoa',function($scope,Pessoa){
    
    
        $scope.pessoa = new Pessoa();        
}]);