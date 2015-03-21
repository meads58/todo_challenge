describe('toDoController', function() {
  beforeEach(module('toDoList'));

  var scope, ctrl

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('toDoController', {
      $scope: scope
    });
  }));

  describe('list of tasks', function() {
    var task = [
      {
        "task": "get some milk",
        "done": false
      }
    ]

    it('starts with an empty task entry field', function() {
      expect(scope.enterTask).toBeUndefined()
    })

    it('can add one task item', function() {
      scope.newTask = "get some milk"
      scope.add()
      expect(scope.allTasks[0].task).toEqual(task[0].task)
    })

    it('are added to not done', function(){
      scope.newTask = "get some milk"
      scope.add()
      expect(scope.allTasks[0].done).toEqual(task[0].done)

    })

  })
})