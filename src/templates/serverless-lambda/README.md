
# Serverless Lambda Template


# HOW TO RUN:
## 1. Created an .env file based on the .env.sample file in the project root

## 2. Install
```sh
yarn
```

## 3. Run
```sh
yarn start:dev
```

## Initial endpoint curl sample
```curl
curl --location --request GET 'http://localhost:3000/v1/sample/initial-route'
```

## List all routes created
```sh
yarn routes
```

## Folder Structure (/root)
```
.
├── helpers
└── src
    ├── infra
    │   ├── config
    │   └── container
    ├── modules
    │   └── RandomSample
    │       └── Sample
    │           ├── interfaces
    │           └── useCases
    ├── server
    ├── shared
    │   ├── adapters
    │   ├── contracts
    │   ├── decorators
    │   ├── exceptions
    │   ├── responses
    │   └── types
    └── utils
```