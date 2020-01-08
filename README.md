# nest-restaurant-api

## Description

This demo is taken from...

[Developing a secure api with nestjs adding authentication](https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authentication/)

[Implementing role based access control in NestJS](https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authorization/#Implementing-Role-Based-Access-Control-in-NestJS)

## Installation

```bash
$ docker-compose run app yarn install
```

Add a `.env` file with

```
AUTH0_DOMAIN=https://your-domain.auth.com
AUTH0_AUDIENCE=https://sso-api.demo.com
```

## Running the app

```bash
# development
$ docker-compose up

$ open https://dashboard.whatabyte.now.sh/home
```