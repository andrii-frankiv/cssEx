(function() {
	'use strict';

	angular
		.module('ratingGridApp')
		.controller('ratingGridController', ratingGridController);

		ratingGridController.$inject = ['$scope'];

		function ratingGridController ($scope) {
			$scope.criteriaData = {

			  "name": "Rating",

			  "dataType": "treecategory",

			  "possibleValues": {
				    "Prime" : [ "Moodys-Aaa", "S&P-AAA", "Fitch-AAA" ],
				    "High Grade" : [ "Moodys-AA1", "Moodys-AA2", "Moodys-AA3", "S&P-AA+","S&P-AA","S&P-AA-","Fitch-AA+","Fitch-AA","Fitch-AA-"],
					"Upper Medium Grade": [ "Moodys-A1","Moodys-A2","Moodys-A3", "S&P-A+","S&P-A","S&P-A-","Fitch-A+","Fitch-A","Fitch-A-"], 
					"Lower Medium Grade": [ "Moodys-Baa1","Moodys-Baa2","Moodys-Baa3", "S&P-BBB+","S&P-BBB","S&P-BBB-","Fitch-BBB+","Fitch-BBB","Fitch-BBB-"],
					"Non-investment Grade Speculative":[ "Moodys-Ba1","Moodys-Ba2","Moodys-Ba3", "S&P-BB+","S&P-BB","S&P-BB-","Fitch-BB+","Fitch-BB","Fitch-BB-"],
					"Highly Speculative": [ "Moodys-B1","Moodys-B2","Moodys-B3", "S&P-B+","S&P-B","S&P-B-","Fitch-B+","Fitch-B","Fitch-B-"],
					"Substantial Risks": [ "Moodys-Caa1", "S&P-CCC+","Fitch-CCC"], 
					"Extremely Speculative": [ "Moodys-Caa2", "S&P-CCC","Fitch-CCC"],
					"Default Imminent with Little Prospect For Recovery": [ "Moodys-Caa3","Moodys-Ca", "S&P-CCC-","S&P-CC","S&P-C","Fitch-CCC"],
					"In Default": ["Moodys-C","S&P-D","Fitch-DDD"]
				},
				"__possibleValues": [
					{	"key":"Prime",
						"value":["Moodys-Aaa","S&P-AAA","Fitch-AAA"]
					},
					{	"key":"High Grade",
						"value":["Moodys-AA1","Moodys-AA2","Moodys-AA3","S&P-AA+","S&P-AA","S&P-AA-","Fitch-AA+","Fitch-AA","Fitch-AA-"]
					},
					{	"key":"Upper Medium Grade",
						"value":["Moodys-A1","Moodys-A2","Moodys-A3","S&P-A+","S&P-A","S&P-A-","Fitch-A+","Fitch-A","Fitch-A-"]
					},
					{	"key":"Lower Medium Grade",
						"value":["Moodys-Baa1","Moodys-Baa2","Moodys-Baa3","S&P-BBB+","S&P-BBB","S&P-BBB-","Fitch-BBB+","Fitch-BBB","Fitch-BBB-"]
					},
					{	"key":"Non-investment Grade Speculative",
						"value":["Moodys-Ba1","Moodys-Ba2","Moodys-Ba3","S&P-BB+","S&P-BB","S&P-BB-","Fitch-BB+","Fitch-BB","Fitch-BB-"]
					},
					{	"key":"Highly Speculative",
						"value":["Moodys-B1","Moodys-B2","Moodys-B3","S&P-B+","S&P-B","S&P-B-","Fitch-B+","Fitch-B","Fitch-B-"]
					},
					{	"key":"Substantial Risks",
						"value":["Moodys-Caa1","S&P-CCC+","Fitch-CCC"]
					},
					{	"key":"Extremely Speculative",
						"value":["Moodys-Caa2","S&P-CCC","Fitch-CCC"]
					},
					{	"key":"Default Imminent with Little Prospect For Recovery",
						"value":["Moodys-Caa3","Moodys-Ca","S&P-CCC-","S&P-CC","S&P-C","Fitch-CCC"]
					},
					{	"key":"In Default",
						"value":["Moodys-C","S&P-D","Fitch-DDD"]
					}
				],

			  "multiselect": "Yes",

			  "operators": [ "Equals",  "Does not equal" ]

			}
		}

})();