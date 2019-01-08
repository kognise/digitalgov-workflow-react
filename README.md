# Digital.gov Workflow React

*My remake of the [Digital.gov Workflow](https://github.com/GSA/digitalgov-workflow/) site in React, using Next.js*

## Setting Up

**You'll need NodeJS 6 or above installed, and preferably the [Yarn](https://yarnpkg.com/) package manager.**

1. Run `yarn` to install the dependencies.

2. Create two links:

   1. `./node_modules/uswds/dist/img/` -> `./static/images/`
   2. `./node_modules/uswds/dist/fonts/` -> `./static/fonts/`

   You can create links with `mklink /J TO FROM` on Windows or `ln -s FROM TO` on Unix-based systems (the second one is untested, please notify me if I'm wrong).

## Running

**In development**

```shell
yarn dev
```

**For production**

```
yarn build
yarn start
```

**Static export**

I'm currently working on being able to export to static files.

## Backend

There's a GraphQL backend that will be uploaded to GitHub shortly.

I may also eventually eliminate the backend for a purely static/serverless/whatever-you-call-it approach.