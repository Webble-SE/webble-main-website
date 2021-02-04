# Webble.se

Main website of Webble agency in Sweden

## Client

Consists of a React Application

## Server-API

Built with Express.js

## Development

Docker Compose is used to run all the services in the local environment. \
All the services can be found in the docker-compose.yml file.

**Note:** The images must be rebuilt when a new package is installed with NPM as the packages (node_modules) are installed in the Dockerfile (Dockerfile.dev), but 
also when changes are made to the init-files of databases (like the init.sql for mySQL) and changes to the models used by the database.

### How to start the application locally

To start the application locally, both the backend and frontend and the database, a shellscript-file has been created callöed docker-init.sh which lies in the root of the application.
To run it simply enter "./docker-init.sh" in the terminal when in the root of the application.
### Some Docker Compose commands

Start all services in detached mode:
- *docker-compose up -d*

Stop all services and remove all volumes:
- *docker-compose down --volumes* 

List all services:
- *docker-compose ps*

Build one service without cache:
- *docker-compose build <SERVICE_NAME> --no-cache*

Build all services without cache:
- *docker-compose build --no-cache*

### Some Docker commands related to troubleshooting

List all containers:
- *docker container ls*

List all volumes:
- *docker volume ls*

Clean up unused resources:
- *docker system prune -a*

Remove all containers: 
- *docker rm -f $(docker ps -a -q)*

Remove all volumes:
- *docker volume rm $(docker volume ls -q)*

### Linting and testing
Run `npm test`to execute all tests (currently only on the client side) and lint code with ts-standard

Run `npm run lint:fix` to auto fix all auto-fixable code style errors (currently only on client side).