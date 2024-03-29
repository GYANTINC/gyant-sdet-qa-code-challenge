# Doctor Case Label Testing

GYANT SDET Challenge

## Background

Some time ago, we were asked to create a web application to allow doctors to evaluate medical cases by reading an Electronic Health Record ("EHR") of a patient encounter, and labeling it with a "Condition" (i.e. a diagnosis). All the information in the original request for this project can be found in the [Context](https://github.com/GYANTINC/gyant-sdet-qa-code-challenge/wiki/Context) page.

In order to deliver this project, the codebase available in this repository was implemented. You can read more about how to execute it in the [Installation](https://github.com/GYANTINC/gyant-sdet-qa-code-challenge/wiki/Installation) page. 

As you can observe, there is no automated test or validation of any kind in this repository.

# Assignment

## How to Run With Docker
### To Start 
```bash
`./start-app.sh`
```
### To Stop
```bash
`docker-compose down`
```
## API 
We have two endpoints to import the data to our collections. Check the list with all the endpoints below.
``
### API endpoints:
`http://localhost:3000/api-docs`
- /cases
    - GET /unreviewed/userId
    - POST /import
    - PUT /review
    - DELETE /

- /conditions
    - GET /
    - POST /
    - POST /import
    
- /users
    - POST /login
    - POST /register

### MONGO DB
`MONGODB_CONNECTION=mongodb://127.0.0.1:27018/test`

## Goal
Define and implement the tests of the types and levels you consider useful/necessary to help us validate the correctness of this piece of software (at a minimum, both API and UI tests should be delivered).

We are expecting the UI tests to be implemented using the Robot Framework tool (Browser or Selenium library) and the API tests to be implemented in Javascript or Typescript.

Keep in mind that all the written/implemented tests and validations should be portable (i.e. automatically executable on a local machine, a server, a CI/CD platform, etc.) and we are expecting the tests to be integrated into a CI platform like TravisCI or Github Actions.

If you wish to, you can suggest or even implement small refactors/tweaks to make the source code more testable. The same is valid for all the bugs you may find.

## Delivery format

1. Mirror the contents of this project to a personal private repository (do not fork this one, as your work will be readable by all other candidates).

2. Perform all the changes of your choice to reach the goal of the assignment.

3. Once you have finished working on it, reply to the challenge presentation e-mail you received (the one with the link to this repository) and include the result of your work in attachment.