# Template for a basic website

## Tools used
Django rest api for backend

Poetry for python package management

Vue js for frontend

Yarn and vue/cli 3 for front end

NGINX to serve as a reverse proxy

Postgresql database

Docker and docker-compose to run server with one command:

## Commands to run server
(add sudo to start of commands if user is not in docker group)

### For development build:
docker-compose up --build -d

yarn install may need to be run in frontend folder to create node modules

### For production build:
#### Before building, run:
docker-compose -f docker-compose.prod.yml run backend python /code/manage.py migrate

docker-compose -f docker-compose.prod.yml run backend python /code/manage.py createsuperuser

docker-compose -f docker-compose.prod.yml up --build -d

## Recommendations for customization:
Update the environment variables in docker-compose files, or create .env files

Configure https support and website routing with NGINX
