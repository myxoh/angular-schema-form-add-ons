/**
 * Created by Nicklas B on 2015-06-21.
 */

/*global angular */
"use strict";

/**
 * The main app module
 * @name exampleApp
 * @type {angular.Module}
 */

var exampleApp = angular.module("exampleApp", ["schemaForm"]);

exampleApp.controller("exampleController", ["$scope", function ($scope) {


    // This is the schema definition, note that the title, even though it is possible to, isn't defined here.
    // This to make the schema more portable, schemas are for validation and definition and can be used everywhere.
    $scope.schema = {
        type: "object",
        title: "camelCase",
        properties: {
            camelCaseFormat: {
                type: "string",
                format: "camelcase",
                description: "When you edit this, the value will become automatically camelCase:d."
            },
            camelCaseFormType: {
                type: "string",
                description: "When you edit this, which is required, the value will become equally camelCase:d."
            }
        },
        required: ["camelCaseFormType"]
    };

    // Define all UI aspects of the form
    $scope.form = [

        {
            "key": "camelCaseFormat",
            "title": "Example of camelCase editor via format"
        },
        {
            "key": "camelCaseFormType",
            "title": "Example of camelCase editor via form type",
            "type": "camelcase",
            "some_setting": "true"
        },
        {
            type: "submit",
            style: "btn-info",
            title: "OK"
        }
    ];
    // Initiate the model
    $scope.model = {};
    // Initiate one of the inputs
    $scope.model.camelCaseFormat = "default value";

    // This is called by asf on submit, specified in example.html, ng-submit.
    $scope.submitted = function (form) {
        $scope.$broadcast("schemaFormValidate");
        console.log($scope.model);
    };
}]);

