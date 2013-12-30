var app = angular.module('myApp', ['ui.slider']);

app.controller('myAppController', function($scope) {

	$scope.iconSliders = "icon-light-down";

	$scope.atualizarSliders = function(){
		if($scope.lightModel < 33){
			$scope.iconSliders = "icon-light-down";
		}else if($scope.lightModel > 33 && $scope.lightModel < 66){
			$scope.iconSliders = "icon-adjust";
		}else{
			$scope.iconSliders = "icon-light-up";
		}
	}
});