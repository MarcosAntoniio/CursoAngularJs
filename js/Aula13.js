appGeneric.controller('Aula13Controller',function($scope)
{



});

appGeneric.directive('ngOla',function(){


	return{


		restrict:'AEC',
		scope:{ngNome:'@'},
		template:'<h2>Olá {{ngNome}} !</h2>'
	}
});