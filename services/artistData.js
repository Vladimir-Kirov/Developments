'use strict';

musicApp.factory('artistData', function ($http, $q, $log) { 
	return {
		getArtist: function(id) {

			var defer = $q.defer();

			$http({ method: 'GET', url: '/Application/data/artist/' +  id + '.json'})
				.success(function (data, status, headers, config) {
					defer.resolve(data);
				})
				.error(function (data, status, headers, config) {
					defer.reject(data);
				});

				return defer.promise;
			}
	}

})