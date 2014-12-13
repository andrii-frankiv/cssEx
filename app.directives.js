(function() {
	'use strict';

	angular
		.module('ratingGridApp')
		.directive('rGrid', rGrid);

	rGrid.$inject = [];

	function rGrid () {
		var directive = {
			restrict: 'E',
			replace: true,
			controller: 'ratingGridController',
			link: link,
			templateUrl: 'rating-grid.tpl.html'
		};
		return directive;

		function link (scope, elem) {
			var values = scope.criteriaData.possibleValues;
			console.log(angular.toJson(scope.criteriaData.possibleValues));
			scope.gridData = mapData(values);

			scope.showRating = function() {
				console.log(angular.toJson(scope.gridData));
			}

		}

		

		function mapData (data) {
			var prefix = '-';
			var res = [];
			angular.forEach(data, function(value, key) {
				res.push(
					{
						'category': key,
						'rating': {},
						'Moodys': categorize(value, 'Moodys' + prefix),
						'S&P': categorize(value, 'S&P' + prefix),
						'Fitch': categorize(value, 'Fitch' + prefix)
					}
				);
			});
			console.log('mapped data: ', res);
			return res;
		}

		function categorize (list, cat) {
			var res = [];
			for (var i = 0, l = list.length; i < l; i++) {
				if (list[i].indexOf(cat) > -1) {
					res.push(list[i].substring(cat.length));
				}
			}
			return res;
		}
	}
})();