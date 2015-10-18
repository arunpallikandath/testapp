﻿/*
* 
* AngularJS function load the CV content from the JSON file to module scope. 
* -------------------------------------------------------------------------------
* Description       Author      Date           Comments
* -------------------------------------------------------------------------------
* Created           Arun        12-Oct-2015    
* -------------------------------------------------------------------------------
*/
var HomeController = function ($scope, $http) {
    $scope.mycv = null;
    $http.get('Content/mycv.json')
        .success(function (data) {
            $scope.mycv = data;
        })
        .error(function (data, status, error, config) {
            //alert(error);
            $scope.mycv = [{ loadstatus: "error", description: "Could not load json   data" }];
        });
    
}
// The $inject property of every controller 
// (and pretty much every other type of object in Angular) 
// needs to be a string array equal to the controllers arguments, only as strings
HomeController.$inject = ['$scope','$http'];
// AngularJS App creation
var onlineCVApp = angular.module('onlineCVApp', []);
// Adding angularJS controller to app.
onlineCVApp.controller('HomeController', HomeController);