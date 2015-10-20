'use strict';

/* Controllers */

var qrApp = angular.module('qrApp', []);

qrApp.controller('QrCardCtrl', function($scope) {
	$scope.keyword = "Kunskap";
	$scope.campaign = "121345";
});
