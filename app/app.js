'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
	.controller('InputController', ['$scope', function($scope) {
		$scope.user = [];
		$scope.email = null;
		$scope.password = null;
		$scope.submit = function() {
			if ($scope.email && $scope.password) {
				$scope.user = [];
				$scope.user.push(this.email);
				$scope.user.push(this.password);
			}
		};
	}]);
