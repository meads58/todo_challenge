var toDoListApp = angular.module('toDoList', []);

toDoListApp.controller('toDoController', function($scope){

  $scope.allTasks = [];

  $scope.add = function(){
    $scope.allTasks.push({
      task: $scope.newTask,
      done: false
    })
    $scope.newTask = '';
  }



});