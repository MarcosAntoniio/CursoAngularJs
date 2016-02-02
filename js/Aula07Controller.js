appGeneric.controller('Aula07Controller', function ($scope) {

    $scope.nomes = ['Marcos','Maria','Lucas'];
        
    // console.log($scope.nomes.join('-'));    
    
    
    $scope.pessoas = [];
    
    $scope.pessoas.push({
    
        nomeCompleto:"Marcos Antônio Bezerra De Lima",
        idade : 21, 
    
    
    });
    
    $scope.pessoas.push({
    
        nomeCompleto:"Lucas Matheus",
        idade : 20, 
    
    
    });      
    
    
    $scope.adicionarPessoa = function()    
    {
    
        var nome = document.getElementById("nomepessoa");        
        var idade = document.getElementById("idadepessoa");       
        
        $scope.pessoas.push({nomeCompleto: nome.value,idade: idade.value});
        
        nome.value="";
        idade.value="";
    }
});