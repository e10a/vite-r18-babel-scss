# Quick start

## Setup

Make sure you have Node v.11 or above installed.

```
npm install
```

Copy `.env.example` to `.env` if it exists and `.env.production` if needed.
Ask the dev team, if `.npmrc` is needed.

## Production

To build an optimized version of the application in `/dist/` use command:

```
npm run build
```

For previewing generated build use command:

```
npm run preview
```

## Development

Deploy the app and start the middleware server with live reload:

```
npm run dev
```

## Basic configuration

Build settings for development and production are located in `vite.config.js`.

The configuration files can be switched using the `NODE_ENV` environment variable.

## File structure

```bash
├── /dist/                      # Production directory (minified, optimized and compiled files)
├── /public/                       # Temporary served files
└── /src/                       # The source code of the application
    ├── /assets/
        └── /icons/             # SVG icons
        └── /fonts/             # Fonts. Try to use .woff and .woff2
        └── /images/            # Images. Try to use .webp format
    ├── /components/            # Reusable components, used over the app
    ├── /context/               # React context
    ├── /hooks/                 # Reusable hooks
        └── /animations/        # reusable animation hooks
    ├── /pages/                 # App pages
    ├── /services/              # Api calls
    ├── /styles/                # Global css
├── .env.example                # Environment variables
├── .editorconfig               # IDE style configuration
├── .eslintrc                   # Eslint config
├── .gitignore                  # Git ignore
├── .prettierignore             # Prettier ignore
├── .prettierrc                 # Prettier config
├── index.html                  # Entry point
├── js.config                   # Js config
├── package.json                # Project meta and dependencies
├── vite.config.js              # Build config
```

# App architecture

## Assets

### Fonts

We are using .woff and .woff2 formats.

### SVG Icons

All svg icons should be stored in `./src/assets/icons`.

Make sure the shapes do not use a `fill` and `stroke` properties, so that you can dynamically change the color in css.

To use icon import it as:

```jsx
import { ReactComponent as Icon } from 'assets/icons/icon.svg'
```

### Images

Before adding an image, convert it to .webp and compress

## Components

Components directory should contain reusable app components, located in directories. Each component directory should have the following structure:

```bash
├── /Component/
    ├── /Component.jsx               # React component
    ├── /Component.module.scss       # Styles
    └── /index.jsx                   # Export Component.jsx
```

## Context

React contexts directory. After defining provider, you should create context call hook which should look as following:

```jsx
export function useYellowCounter() {
  const context = useContext(YellowCounterContext)
  if (context === undefined) {
    throw new Error('useYellowCounter must be used within a YellowCounterProvider')
  }
  return context
}
```

## Hooks

Reusable hooks

### Animations

Place reusable animation hooks here

## Pages

Contains page directory. Page directory structure is:

```bash
├── /Page/
    ├── /components/                          # React component
        ├── /Component/                       # Page specific component
            ├── /Component.jsx                # React component
            ├── /Component.module.scss        # Styles
            └── /index.jsx
    ├── /Page.jsx                             # React component
    ├── /Page.module.scss                     # Styles
    └── /index.jsx                            # Export Page.jsx
```

Import page with dynamic import as follows for optimizing loading speed:

```jsx
const Page = lazy(() => import('pages/Page'))
```

## Services

Place api call function here

## Styles

Boilerplate use [Sass](https://sass-lang.com/) as an CSS Preprocessor.

Entrypoint by default: `./src/styles/global.scss`.

Global Styles are written in .scss file format. Do not import thinks directly from styles folder, it is injected at the whole pages

Pages and component styles are written in .module.scss format

## Media Queries

A `sass-mq` library is used to generate media query mixins. The breakpoints are defined in `_variables.scss`, in the `$mq-breakpoints` object. Media queries use mobile-first approach. Check [sass-mq documentation](https://github.com/sass-mq/sass-mq) for more info.

Example use:
```scss
@include mq(laptop) { // wider than 'laptop' breakpoint
    background-color: red;
}
@include mq($until: tablet) { // narrower than 'tablet' breakpoint
    background-color: yellow;
}
@include mq($from: tablet, $until: desktop) { // between 'tablet' and 'desktop' breakpoints
    background-color: green;
}
```

### Directory aliases

System provides directory aliases for `import` statements in order to simplify the import structure.

I.e. you can use `import { Component } from 'components/Component';` instead of `import { Component } from '/src/components/Component';`

| Alias      | Path          |
|------------|---------------|
| Assets     | `assets/`     |
| Components | `components/` |
| Context    | `context/`    |
| Hooks      | `hooks/`      |
| Pages      | `pages/`      |
| Services   | `services/`   |
| Styles     | `styles/`     |

### React app component

Place contexts and routing in App.jsx
