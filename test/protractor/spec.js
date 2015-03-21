describe('toDo list', function() {

  it('has the title toDo Lister', function(){
    browser.get("http://localhost:8081")
    expect(browser.getTitle()).toEqual("toDo Lister")
  });

  it('can enter in a task', function() {
    setUpHelper();
    var tasks = element.all(by.css('li'));
    expect(tasks.get(0).getText()).toBe('get some milk')
  })

  it('will clear out input field after adding a task', function() {
    setUpHelper();
    $('#new_task').click();
    expect(tasks.length).toBe(1);
  })

  it('has tasks entered not done', function() {
    setUpHelper();
    expect(element(by.model('taskItem.done')).isSelected()).toBe(false);
  })

  // it('can mark tasks as done', function() {
  //   setUpHelper();
  //   element(by.model('taskItem.done').click();
  //   expect(element(by.model('taskItem.done')).isSelected()).toBe(true);

  // })

  setUpHelper= function() {
    element(by.model('newTask')).sendKeys('get some milk')
    $('#new_task').click();
  }

})

