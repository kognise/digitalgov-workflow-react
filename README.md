# Digital.gov Workflow React

*My remake of the [Digital.gov Workflow](https://github.com/GSA/digitalgov-workflow/) site in React, using Next.js*

## Goals

- Speedy

  The site is designed to be fast and responsive to provide the best experience for it's users. This also means loading large amounts of data asynchronously after the page loads.

- Future-proof

  I tried to make the site easy to maintain in the future. Partly, this means keeping certain conventions to keep everything clean. See the Conventions section.

- Accessible

  I want this site to be easy to use for people using assistive technologies such as screen readers. This means everything has to conform to the [WAI-ARIA guidelines](https://www.w3.org/TR/wai-aria/).

## Conventions

Below are some conventions to try to keep everything organized. Although this probably won't become a big project, it's always nice to have such conventions. Note that all of these conventions apply unless you absolutely *have* to break one.

### Coding Style

- No semicolons

  Don't use semicolons at the ends of lines of JavaScript code. With SCSS, semicolons **must** be used.

- Single quotes

  Only single quotes may be used for strings, in both JavaScript and SCSS, except when creating a format string with backticks.

- ES6 imports instead of `require()`
  Use `import foo from 'foo'` instead of `const foo = require('foo')`, and `import { bar } from 'foo'` instead of `const { bar } = require('foo')`. Also use `export foo` instead of `module.exports = foo`.

- Use `let` and `const` instead of `var`

  Never use `var`, and only use `let` when the variable will be changed. If it is an object that has keys that will be set, use `const`.

- Import select things from a module instead of importing the whole module

  Use something like `import { Component } from 'react'` and then `Component` instead of `import react from 'react'` and `react.Component`

- Prefer new fragment syntax

  Always try to use `<>` and `</>` unless you have to define an attribute such as `key`.

- Generally, use ES6 syntax whenever possible

- Prefer USWDS utility classes over custom styles

### File Structure

- All pages should go in the `pages` directory.

- All components used in the pages should go in the `components` directory.

- All reusable utility functions should go in the `lib` directory.

- Styles should go in the `styles` directory.

  - `uswds.scss` imports the U.S. Web Design System

  - `variables.scss` defines customization variables for the USWDS

  - `custom.scss` houses custom styles

## Setting Up

**You'll need NodeJS 6 or above installed, and preferably the [Yarn](https://yarnpkg.com/) package manager.**

1. Run `yarn` to install the dependencies.

2. Create two links:

   1. `./node_modules/uswds/dist/img/` -> `./static/images/`
   2. `./node_modules/uswds/dist/fonts/` -> `./static/fonts/`

   You can create links with `mklink /J TO FROM` on Windows or `ln -s FROM TO` on Unix-based systems (the second one is untested, please notify me if I'm wrong).

   Also note that you only have to complete this step if you want to use any icons, images, or fonts.

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

The output will be in a directory called `out`.

## Backend

The GraphQL backend for this project is [here](https://github.com/arch-lord/digitalgov-workflow-graphql) on GitHub, and is [hosted on heroku](https://github.com/arch-lord/digitalgov-workflow-graphql).

I may eventually eliminate it for a purely static approach.