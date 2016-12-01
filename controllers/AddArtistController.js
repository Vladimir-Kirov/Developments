'use strict';

musicApp.controller('AddArtistController', 
	function AddArtistController($scope, $location, $anchorScroll, artistData) {
		$scope.saveArtist = function(artist, newArtistForm) {
			if (newArtistForm.$valid) { 
				artistData.saveArtist(artist);
				alert('Artist ' + artist.name + ' ' + artist.created + ' saved!'); 
			}
			else {
				alert('Invalid data');
			}
	}

	$scope.cancel = function () {
		alert('cancel');
	}

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
	}
});