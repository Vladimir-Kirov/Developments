'use strict';

musicApp.controller('ArtistDetailsContoller', 
		function ArtistDetailsContoller($scope, artistData) { 
	artistData
		.getArtist(1)
		.then(function (data) {
				$scope.artist = data;
	})

	$scope.hideInformation = true; 
	$scope.showInfoText = 'Show';
	$scope.showMoreInfo = showMoreInfo;
	
	$scope.hideBandMembers = true;
	$scope.showBandMembersText = 'Show';
	$scope.showBandMembers = showBandMembers;

	$scope.bandRecordsShow = true;
	$scope.bandRecordsShowText = 'Info';
	$scope.showAndHideRecords = showAndHideRecords;

	$scope.upVoteRating = upVoteRating; 
	$scope.downVoteRating = downVoteRating; 

	$scope.sort = 'id';

	function showAndHideRecords() {
		if ($scope.bandRecordsShow == true) {
			$scope.bandRecordsShowText = 'Hide';
			$scope.bandRecordsShow = false;
		}
		else {
			$scope.bandRecordsShowText = 'View';
			$scope.bandRecordsShow = true;
		}
	}

	$scope.boldFontCss = function () {
		fontWeight = 'bold',
		textDecoration = 'underline'
	};

	$scope.blueTextClass = 'blue-text';
	$scope.greyBackgroundClass = 'grey-background';

	
	function showBandMembers() {
		if ($scope.hideBandMembers == true) {
			$scope.showBandMembersText = 'Hide';
			$scope.hideBandMembers = false;
		}
		else {
			$scope.showBandMembersText = 'Show';
			$scope.hideBandMembers = true;
		}
	}

	function showMoreInfo() {
		if ($scope.hideInformation == true) {
			$scope.showInfoText = 'Hide'; 
			$scope.hideInformation = false;
		}
		else {
			$scope.showInfoText = 'Show'; 
			$scope.hideInformation = true; 
		}
	}

	function upVoteRating(album) {
		album.rating++;
	}

	function downVoteRating(album) {
		if (album.rating > 0) {
			album.rating--;
		}
	}
});