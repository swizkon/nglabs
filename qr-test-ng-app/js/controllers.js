'use strict';

/* Controllers */

var qrApp = angular.module('qrApp', []);

qrApp.controller('QrCardCtrl', function($scope) {
	$scope.keyword = "Skogsmus";
	$scope.campaign = "123";
	$scope.client = "naturhistoriska";
});
