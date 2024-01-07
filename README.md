<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
<p align="center">An enterprise-grade backend application built with <a href="https://nestjs.com/" target="_blank">NestJS</a> and a suite of modern technologies for <a href="https://mblabs.com.br" target="_blank">MB Labs</a>.</p>

## Description

This project leverages the [NestJS](https://nestjs.com/) framework and TypeScript to create a scalable, maintainable, and performant backend system. It's crafted with clean architecture principles, promoting separation of concerns and modularity.

## Detailed Architecture & Folder Structure

The project follows a modular and feature-driven architecture, providing a clear separation of concerns and promoting maintainability and scalability.

```
src/
├─ apis/
│ └─ sample/
│ ├─ controllers/
│ │ └─ sample.controller.ts - Handles incoming requests related to 'sample'
│ ├─ dtos/
│ │ └─ sample.dto.ts - Data Transfer Objects for 'sample' operations
│ ├─ services/
│ │ └─ sample.service.ts - Business logic for 'sample' features
│ ├─ tests/
│ │ └─ sample.service.spec.ts - Tests for 'sample' Service
│ └─ sample.module.ts - Module bundling up 'sample' related components
│
├─ common/
│ ├─ filters/
│ │ └─ http-exception.filter.ts - Filter for handling HTTP exceptions
│ ├─ middleware/
│ │ └─ logger.middleware.ts - Middleware for logging requests and responses
│
├─ data/
│ ├─ entities/
│ │ └─ sample.entity.ts - TypeORM entity representing 'sample' data model
│ ├─ migrations/
│ │ └─ ... - Database migration files
│ ├─ repositories/
│ │ └─ sample.repository.ts - Repository for 'sample' entity data access
│
├─ listeners/
│ └─ ... - Event listeners and handlers
│
├─ main.ts - Entry file setting up the NestJS application
└─ app.module.ts - Root module that orchestrates the application
```

Additional files and configuration settings are also included, providing a complete setup for a professional development environment:

- **.eslintrc.js**: Linting configurations for code consistency.
- **.prettierrc**: Prettier configurations for code formatting.
- **docker-compose.yml**: Docker configurations for container orchestration.
- **Dockerfile**: Docker setup for building the application container.
- **package.json** & **package-lock.json**: NPM configurations and dependencies.
- **tsconfig.json** & **tsconfig.build.json**: TypeScript compiler configurations.
- **README.md**: Comprehensive documentation about the project (this file).

## Enhanced Technologies & Tools Used

- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **[TypeORM](https://typeorm.io/)**: An ORM that can run in NodeJS and be used with TypeScript or JavaScript.
- **[PostgreSQL](https://www.postgresql.org/)**: An open source object-relational database system.
- **[Docker](https://www.docker.com/)**: A platform for developing, shipping, and running applications.
- **[Swagger](https://swagger.io/)**: Tools for documenting APIs and making them interactive.
- **[Pino](https://github.com/pinojs/pino)**: A very low overhead Node.js logger, perfect for logging in JSON format.
- **[Jest](https://jestjs.io/)**: A delightful JavaScript Testing Framework with a focus on simplicity.
- **[ESLint](https://eslint.org/)**: A static code analysis tool for identifying problematic patterns in JavaScript code.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter that supports many languages.
- **[SonarQube](https://www.sonarqube.org/)**: Continuous Inspection tool to detect bugs, vulnerabilities, and code smells in your code.
- **[LocalStack](https://localstack.cloud/)**: A fully functional local AWS cloud stack for testing and mocking cloud development.
- **[Adminer](https://www.adminer.org/)**: A full-featured database management tool accessible through a web interface.

## Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/maxvictor/nestjs-starter.git
$ cd nestjs-starter
$ npm install
```

## Running the app

Ensure you have Docker running, then start the application:

```bash
# Start the PostgreSQL database and other services with Docker
$ docker-compose up -d

# Development mode with hot-reload
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Testing

Run tests to ensure everything is working as expected:

```bash
# Unit tests
$ npm run test

# End-to-end tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## Swagger API Documentation

Once the application is running, access the Swagger UI to interact with the API and view the endpoints documentation at `http://localhost:3000/api`.

## Future Improvements

- **Caching**: Implement caching for frequently accessed data to improve performance.
- **Microservices**: Refactor to a microservices architecture for greater scalability.
- **Advanced Authentication**: Implement more robust authentication and authorization strategies.
- **Logging & Monitoring**: Enhance logging and add a monitoring solution for better observability.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Set up pipelines for automated testing and deployment.
- **Security**: Implement advanced security features and best practices, including rate limiting and CSRF protection.

## Support

This project was created for learning and development purposes. Feel free to fork, star, and contribute! If you encounter any issues or have improvements, please open an issue or submit a pull request.

## Stay in touch

- Author - [Max Victor](https://github.com/maxvictor)

## License

- Nest is [MIT licensed](LICENSE).
- Project is [MB Labs licensed](LICENSE).