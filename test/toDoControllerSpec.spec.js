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
      setUpHelper();
      expect(scope.allTasks[0].task).toEqual(task[0].task)
    })

    it('can not enter the same task twice.', function() {
      setUpHelper();
      scope.add()
      expect(scope.allTasks.length).toEqual(1)
    })

  })

  describe('status of task.', function() {

    it('Is set to not done when created.', function(){
      setUpHelper();
      expect(scope.allTasks[0].done).toEqual(false)
    })

  })

  setUpHelper= function() {
    scope.newTask = "get some milk";
    scope.add();
  }

})