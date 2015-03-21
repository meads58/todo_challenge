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

  $scope.editTask = function(){
    $scope
  }

  $scope.removeTask = function(index) {
    if($scope.allTasks[index].done === true){
      $scope.allTasks.splice(index,1)
    }
  }

  $scope.setChecked = function(index){
    $scope.allTasks[index].done = true
  }


});