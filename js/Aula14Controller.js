appGeneric.controller('Aula14Controller',function($scope,$http){

$scope.dados =[];


$scope.carregaDados =  function () {
	
	$http
	    .get("dados.json")
	    .success(function(responseServer)
	    {
	    	alert(responseServer);

	    	$scope.dados = responseServer;


	    })
	    .error(function(errorResponseServer){

	    	alert("Erro");
	    });
}	


});