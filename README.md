## Features

-   ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
-   ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
-   💎 [TypeScript](https://www.typescriptlang.org/) - Why not?!
-   🔨 [EsLint](https://eslint.org/) - Pluggable JavaScript linter
-   🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
-   🐺 [Husky](https://github.com/typicode/husky) - Native Git hooks
-   ⚙️ [Jest](https://jestjs.io/) - Testing libraries
-   ⌨️ Absolute Imports
-   📑 [Commitlint](https://commitlint.js.org/) - Linting your commits based on commit convention

# Getting Started

## Prerequisites

-   📦 [Node.js >=16](https://nodejs.org/)
-   📦 [Yarn >=1](https://yarnpkg.com/)

## Available commands

<p>In this project, you can run the following scripts:</p>

| Script       | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| yarn dev     | Runs the app in the development mode.                                       |
| yarn build   | Builds the app for production to the `dist` folder.                         |
| yarn preview | Builds the app for production to the `dist` folder, and run locally server. |
| yarn lint    | Runs the Eslint and show code problems                                      |
| yarn format  | Runs the Prettier and fix code style                                        |
| yarn commit  | Open the CZ CLI to create a message to your commit.                         |

## Creating a commit 👇

### 📜 Conventional Commit Rules

Use this table as a reference when writing commits. Husky will be in charge of checking that the rules will be followed.

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📝   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  🎨   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  ♻️   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  ⚡   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  ✅   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |  🚨   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  👷   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  ➕   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |  ⏪   |

<p align="right">(<a href="#top">back to top</a>)</p>
