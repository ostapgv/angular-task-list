# angular-task-list

Task: Create Task List.

Functionality. Use Cases:
1.       User can add new task into task list. User type task short description and press <Enter> at keyboard or click <+> button
a.       User can select priority and end date for task.
b.      Default priority is 1
c.       Default end date is next working day
2.       All tasks are displayed in 'Tasks' table
a.       Tasks can be sorted by Name, Priority and End Date
b.      Use can select Active, Completed or All tasks for display. All tasks displayed when all toggle buttons 'Active' and 'Completed' are selected
c.       User can mark task as completed by checking checkbox in the most right column
3.       When user double clicks task row 'Task Details' modal opens
a.       In 'Task Details' popup user can edit Task Short Name, Priority, End Date and Full Description
b.     Edition must be confirmed by ‘Edit’ button or canceled by ‘Cancel’ button
 
Non-functional requirements:
1)      Use local storage for storing task list.
2)      Use Angular.JS
3)    JS unit tests (jasmine)
4)    JS E2E tests (protractor)
5)    do not use bootstrap – prepare own styles for interface
6)    code own modal functionality