
# Postgres Docker Compose template

## Requirements:
  * [Docker](https://docs.docker.com/engine/installation/)

  * [Docker-compose recommended version 1.29.2](https://docs.docker.com/compose/install/)


## Install
```sh
docker-compose up --build
```

## DB Basic info
```sh
POSTGRES_DB: <%= projectName %>
POSTGRES_USER: postgres
POSTGRES_PASSWORD: postgres
PORT: 5432
```