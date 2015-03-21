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

  })

  describe('status of task.', function() {

    it('Is set to not done when created.', function(){
      setUpHelper();
      expect(scope.allTasks[0].done).toEqual(false)
    })

    it('The status can be changed to done.', function() {
      setUpHelper();
      scope.setChecked(0);
      expect(scope.allTasks[0].done).toEqual(true)
    })

  })

  describe('remove a task.', function() {
    it('A task can be deleted from the list of tasks', function() {
      setUpHelper();
      setUpHelper();
      scope.setChecked(1);
      scope.removeTask(1);
      expect(scope.allTasks.length).toBe(1)
    })

    it('Can only remove tasks that are done.', function() {
      setUpHelper();
      scope.removeTask(0);
      expect(scope.allTasks.length).toBe(1)
    })
  })

  setUpHelper= function() {
    scope.newTask = "get some milk";
    scope.add();
  }

})