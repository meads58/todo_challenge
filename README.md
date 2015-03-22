Do you ever forget what key tasks need doing, would a list be handy to keep track of these need to do tasks?

If this is you then the toDo list is for you.

Setup
-----
* Run bower install
* Run npm install

Functionality
-----------
* Enter in an item to the list.
* Tasks can be checked off as completed.
* Tasks can be edited to update the task details.

Development Approach
-------------------
* Choose to develop the frontend with AngularJS, unit testing with karma and end2end testing with Protractor because I wanted to a better understanding of AngularJS and I like the Protractor end2end testing tool.
* Installed all the dependency files with bower and npm and updated the .gitignore file.
* Started with an HTML shell and added in all the src dependencies.
* Created unit tests in Karma and hardcoded values where needed.
* Write code to pass this tests.
* Removed hardcoded values.
* Updated code to get them to pass.
* Write end2end tests in protractor.
* Updated code to get these tests to pass.
* Repeated this process for the rest of the functionality.
* Updated CSS



Issues
------
* Major trouble getting Karma to run on travis CI. Not sure how to configure things to get karma to run on travis. Read the docs and it says that npm test is used to run it. 'npm test' runs karma fine on my machine from the command line but keep on getting an error in travis. Karma docs don't say much more then what I am already doing.