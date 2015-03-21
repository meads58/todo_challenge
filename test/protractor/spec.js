describe('toDo list', function() {

  it('has the title toDo Lister', function(){
    browser.get("http://localhost:8080")
    expect(browser.getTitle()).toEqual("toDo Lister")
  });

  it('can enter in a task', function() {
    element(by.model('newTask')).sendKeys('get some milk')
    $('#new_task').click();
    var tasks = element.all(by.css('li'));
    expect(tasks.get(0).getText()).toBe('get some milk')
  })

  it('has tasks entered not done', function() {
    element(by.model('newTask')).sendKeys('get some milk')
    $('#new_task').click();
    var tasks = element.all(by.css('li'));
    expect(element(by.model('newTask.done')).isSelected()).toBeTruthy();
  })

})

