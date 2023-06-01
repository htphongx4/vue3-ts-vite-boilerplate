# Boilerplate and Starter about Shopping Cart for Vue 3x, TypeScript, Vite, Vue Query, Docker and DummyJSON

🚀 Boilerplate and Starter for Vue 3x, Vite, Tailwind CSS, Vue Query and TypeScript ⚡️ Made with developer experience first: Vue 3x, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commit Lint, VSCode, PostCSS, Tailwind CSS, DummyJSON.

- 🚀 Pages: Sign In, Categories Page, Product Page
- ⚡ All configuration for api calling (using axios)
- ⚡ All configuration for routing, included guards
- 💎 Using docker for multiple env
- 🎁 Tailwind Css combine with Scss
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 🎉 Storybook for UI development
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🦊 Husky for Git Hooks
- 🚓 Friendly structure

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Build app with Docker compose
- To build PRODUCTION
  * Run `make build-production`
  * To start app `make start-production`
  * To stop container `make stop-production`
  
- To build QA - For testing env
  * Run `make build-qa`
  * To start app `make start-qa`
  * To stop container `make stop-qa`
  