

# CLI Template Generator

A CLI with some basic templates to help you develop your projects.

The currently existing templates are


| TEMPLATES|  DESCRIPTION|
|--|--|
| postgres-docker-compose   | Generates a basic docker compose with postgres  |
| serverless-lambda  | Generates a serverless lambda project with typescript  |
| typescript-basic-project | Generates a clean project with typescript set |

***
***
## Getting started

### How to run
after installing the CLI via npm run the command below and select the desired template

```sh
templates-generator
```
***

### Install as a global
```sh
npm i  -g templates-generator
```
***
### Install the project after clone

```sh
npm install
```

### Build
```sh
npm run build
```

### Execute
```sh
npm run start
```
### or
```sh
npm link
```

After link you can run in any folder
```sh
templates-generator
```


## Folder Structure for typescript-basic-project

```sh
.
├── package.json
├── README.md
├── src
│   ├── index.ts
│   ├── interfaces
│   │   └── sample.interface.ts
│   ├── services
│   │   └── sample.service.ts
│   └── shared
│       └── Logger.ts
├── tsconfig.json
├── tslint.json
└── yarn.lock

```

## Folder Structure for serverless-lambda

```sh

.
├── helpers
└── src
    ├── infra
    │   ├── config
    │   ├── container
    │   └── http
    ├── modules
    │   └── RandomSample
    │       └── Sample
    │           ├── interfaces
    │           └── useCases
    ├── server
    ├── shared
    │   ├── adapters
    │   ├── contracts
    │   ├── exceptions
    │   ├── responses
    │   └── types
    └── utils

```