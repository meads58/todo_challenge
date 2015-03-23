var toDoListApp = angular.module('toDoList', []);

toDoListApp.controller('toDoController', function($scope, $window, $filter){

  $scope.allTasks = [];

  $scope.add = function(){
    $scope.allTasks.push({
      task: $scope.newTask,
      done: false
    })
    $scope.newTask = '';
  };

  $scope.editTask = function(){
    $scope
  };

  $scope.removeTask = function(index) {
    if($scope.allTasks[index].done === true){
      $scope.allTasks.splice(index,1)
    }else{
      $window.alert('To remove a task mark as done.');
    };
  };

  $scope.setChecked = function(index){
    $scope.allTasks[index].done = true
  };

  $scope.totalTasks = function() {
    return $scope.allTasks.length
  };

  $scope.filerCompleted = function() {
    var j = grep(scope.allTasks, function(v){
          return v.done === true
      })
  };

});