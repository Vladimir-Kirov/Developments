'use strict';

var musicApp = angular
					.module('musicApp', ['ngRoute'])
					.config(function ($routeProvider) {

						$routeProvider
						    	.when('/addArtist/', {
						    		templateUrl: 'Application/templates/addArtist.html'
						    	})
					})
					.constant('author', 'Vladimir Kirov');

