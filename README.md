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

```shell
yarn build
yarn start
```

**Static export**

To export to static files, for example for deployment on something like GitHub Pages or Netlify, run the below commands.

```shell
yarn build
yarn export
```

The output will be in a folder called `out`.

## Backend

The GraphQL backend for this project is [here](https://github.com/arch-lord/digitalgov-workflow-graphql) on GitHub, and is [hosted on heroku](https://github.com/arch-lord/digitalgov-workflow-graphql).

I may eventually eliminate it for a purely static approach.