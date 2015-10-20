'use strict';

/* Controllers */

var qrApp = angular.module('qrApp', []);

qrApp.controller('QrCardCtrl', function($scope) {
	$scope.keyword = "Kunskap";
	$scope.campaignId = "121345";
});
