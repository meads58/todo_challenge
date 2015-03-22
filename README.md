[![Build Status](https://travis-ci.org/meads58/todo_challenge.svg?branch=master)](https://travis-ci.org/meads58/todo_challenge)

Do you ever forget what key tasks need doing, would a list be handy to keep track of these need to do tasks?

Yes? Then the toDo list is for you.

Setup
-----
* Run bower install
* Run npm install

Functionality
-----------
* Enter in an item to the list.
* Tasks can be checked off as completed.
* Tasks can be edited.
* A count of all tasks is displayed.
* Completed tasks can removed.

Development Approach
-------------------
* Chose to develop the frontend with AngularJS, unit testing with karma and end2end testing with Protractor.
* Installed all the dependency files with bower and npm and updated the .gitignore file.
* Started with a HTML shell and added in all the src dependencies.
* Created unit tests in Karma and initial end2end test in Protractor.
* Wrote code to pass these tests.
* Added in more tests
* Updated code to get tests to pass.
* Expanded on end2end tests Protractor.
* Updated code to get these tests to pass.
* Repeated this process for the rest of the functionality.
* Updated the CSS styling.

Issues
------
* Major trouble getting Karma to run on Travis CI. Not sure how to configure things to get karma to run on Travis. Read the docs and it says that npm test is used to run it. 'npm test' runs karma fine on my machine from the command line but keep on getting an error in Travis. Karma docs don't say much more then what I am already doing.