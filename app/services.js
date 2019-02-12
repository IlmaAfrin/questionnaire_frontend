angular.module('myApp.services', []).
    factory('ApiService', function ($http) {

        var jsonApi = {};

        jsonApi.getQuestion1 = function () {

            return $http.get("http://127.0.0.1:8000/question1/").then(function (response) {
                return response.data;
            });
        };
        jsonApi.getQuestion2 = function () {

            return $http.get("http://127.0.0.1:8000/question2/").then(function (response) {
                return response.data;
            });
        };
        jsonApi.getReplyOfQuestion1OptionNo = function () {

            return $http.get("http://127.0.0.1:8000/question1/?options=No").then(function (response) {
                return response.data;
            });
        };
        jsonApi.getPizzaSelectionOptions = function () {

            return $http.get("http://127.0.0.1:8000/pizzaSelection/").then(function (response) {
                return response.data;
            });
        };
        jsonApi.getReply = function (option) {

            return $http.get("http://127.0.0.1:8000/pizzaSelection/?options="+option).then(function (response) {
                return response.data;
            });
        };
        jsonApi.getReplyOfNonPizzaItemSelection = function (option) {

            return $http.get("http://127.0.0.1:8000/question2/?options="+option).then(function (response) {
                return response.data;
            });
        };
        console.log(jsonApi);
        return jsonApi;
    });
