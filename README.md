# Family

An application that is exclusive to the users who belong to the family group. A single user will be able to create a family and begin inviting other users to join their family. Once a user is in a family, they will be able to create taks, leave messages, create upcoming events, schedule activities, share links from the web etc... All of this will be presented as a message board type display where it is modular in design and makes it easy to customize what the user wants to see. You can think of it as a modern take at forums. I will experiment with the idea of time sensitive data, like daily messages created by users that will be removed once the day ends.

# Family API

List of all the endpoints available and descriptions

## Users

| Ready? | HTTP | URI                     | Description                                         |
| ------ | ---- | ----------------------- | --------------------------------------------------- |
| `yes`  | POST | /user                   | creates a new user and returns the new user created |
| `-`    | GET  | /users                  | returns all the users                               |
| `-`    | GET  | /user/:id               | returns a user where id === :id                     |
| `-`    | PUT  | /user/:id               | updates a user where id === :id                     |
| `-`    | GET  | /user/:id/tasks         | return all the tasks that belongs to the user       |
| `-`    | PUT  | /user/:id/task/:task_id | update a task that belongs to the user              |

## Task

| Ready? | HTTP | URI       | Description                                         |
| ------ | ---- | --------- | --------------------------------------------------- |
| `-`    | POST | /task     | creates a new task and returns the new task created |
| `-`    | GET  | /tasks    | returns all the tasks                               |
| `-`    | GET  | /task/:id | returns a task where id === :id                     |
| `-`    | PUT  | /task/:id | updates a task where id === :id                     |
