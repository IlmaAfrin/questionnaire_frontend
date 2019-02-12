'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['ApiService', '$scope', function (ApiService, $scope) {
    $scope.vm = {
      selectedOption: "Yes"
    };
    var ques = ApiService.getQuestion1()
      .then(
        function (data) {
          $scope.question = data.question;
          $scope.options = data.options;
          return $scope.firstQues;
        },
        function (err) {
          console.log('err: ' + err);
        });

    $scope.onClick = function (count) {

      console.log(count, $scope.vm.selectedOption);
      if (count == 0) {

        if ($scope.vm.selectedOption == "Yes") {
          ques = ApiService.getQuestion2()
            .then(
              function (data) {
                $scope.question = data.question;
                $scope.options = data.options;
                return $scope.question;
              },
              function (err) {
                console.log('err: ' + err);
              });
        }
        else if ($scope.vm.selectedOption == "No") {
          ques = ApiService.getReplyOfQuestion1OptionNo()
            .then(
              function (data) {
                $scope.question = data;
                $scope.options = [];
                return $scope.question;
              },
              function (err) {
                console.log('err: ' + err);
              });

        }
      }
      else if(count == 1){
        if ($scope.vm.selectedOption == "Pizza"){
          ques = ApiService.getPizzaSelectionOptions()
            .then(
              function (data) {
                $scope.question = data.question;
                $scope.options = data.options;
                return $scope.question;
              },
              function (err) {
                console.log('err: ' + err);
              });

        }
        else {
          ques = ApiService.getReplyOfNonPizzaItemSelection($scope.vm.selectedOption)
            .then(
              function (data) {
                $scope.question = data.reply;
                $scope.options = [];
                return $scope.question;
              },
              function (err) {
                console.log('err: ' + err);
              });
        }
      }
      else if(count == 2){
        ques = ApiService.getReply($scope.vm.selectedOption)
            .then(
              function (data) {
                $scope.question = data.Reply;
                $scope.options = [];
                return $scope.question;
              },
              function (err) {
                console.log('err: ' + err);
              });
      }
    }

  }]);