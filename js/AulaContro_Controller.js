appGeneric.controller('AulaControl_Controller',function($scope){


    $scope.nome = "Curso Angular JS DevMedia";
    
    $scope.olaMundo = function(nome){
        
        alert("Seja Bem Vindo " + nome + " :)");
    }

});