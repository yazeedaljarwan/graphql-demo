<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

curls : 
  --for adding a vehicle to db: curl -X POST http://localhost:3000/graphql   -H "Content-Type: application/json"   -d '{
    "query": "mutation { addVehicle(vehicle: { modelName: \"Camry\", companyName: \"Toyota\", mileage: 112000, makeYear: \"2022\" }) { id modelName companyName mileage makeYear } }" <br>
  }'
  
--for getting vehicles by model name : curl -X POST http://localhost:3000/graphql   -H "Content-Type: application/json"   -d '{
    "query": "query { getVehicle(modelName: \"Sunny\") { id modelName companyName mileage  } }"
  }' <br>
  
--for getting all vehicles in db: curl -X POST http://localhost:3000/graphql   -H "Content-Type: application/json"   -d '{
    "query": "query { getAllVehicles { id modelName companyName mileage makeYear } }"
  }'


    
