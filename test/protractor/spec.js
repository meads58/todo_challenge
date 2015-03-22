describe('toDo list', function() {

  beforeEach(function(){
    browser.get("http://localhost:8081")
  })

  it('has the title toDo Lister', function(){
    expect(browser.getTitle()).toEqual("toDo Lister")
  });

  describe('task form', function() {

    it('can enter in a task', function() {
      setUpHelper();
      var tasks = element.all(by.repeater('taskItem in allTasks'));
      expect(tasks.get(0).$('input[type="text"]').getAttribute('value')).toBe('get some milk')
    })

    it('will clear out input field after adding a task', function() {
      setUpHelper();
      $('#new_task').click();
      expect(element.all(by.repeater('taskItem in allTasks')).count()).toEqual(1);
    })

    it('has tasks entered not done', function() {
      setUpHelper();
      expect(element(by.model('done')).isSelected()).toBe(false);
    })

  })

  describe('task update', function(){

    it('can mark tasks as done', function() {
      setUpHelper();
      $('#completed').click()
      expect(element(by.model('done')).isSelected()).toBe(true);
    })

    it('allows a taks to be updated', function() {
      setUpHelper();
      var task = element.all(by.repeater('taskItem in allTasks'));
      task.get(0).$('input[type="text"]').clear()
      task.get(0).$('input[type="text"]').sendKeys('updated task')
      expect(task.get(0).$('input[type="text"]').getAttribute('value')).toBe('updated task')
    })

  })

  describe('task delete', function(){
    it('can delete a task from the list of task if marked done', function() {
      setUpHelper();
      element(by.model('newTask')).sendKeys('task 2')
      $('#new_task').click();
      var task = element.all(by.repeater('taskItem in allTasks'));
      task.get(0).$('#completed').click()
      task.get(0).$('a').click()
      expect(task.get(0).$('input[type="text"]').getAttribute('value')).toBe('task 2')
    })
  })

  setUpHelper= function() {
    element(by.model('newTask')).sendKeys('get some milk')
    $('#new_task').click();
  }

})

