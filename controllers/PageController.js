'use strict';

musicApp.controller('PageController', function ($scope, author) {
	$scope.author = author;
	$scope.date = {
		year: 2016,
		month: 11,
		day: 26
	}
});