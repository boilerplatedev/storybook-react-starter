# storybook-react-starter

A minimal starter repository for a publishable React based UI library. Uses [Storybook](https://storybook.js.org/) for story based development. Comes setup with [TailwindCSS](https://tailwindcss.com/).

The focus is on making sure the developer experience is the best while building with this library.

## Features

- Story based development using [Storybook](https://storybook.js.org/).
- Comes setup for [TailwindCSS](https://tailwindcss.com/) development. Can be easily switched out to support other frameworks.
- Git Hooks using [Husky](https://typicode.github.io/husky/) that lint and run tests before changes are pushed.
- Source Code Lint using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
- Commit Message linting with [commitlint](https://github.com/conventional-changelog/commitlint). Setup to use the [conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) style of commit messages.
- To help developers automatically write good commit messages, [commitizen](https://commitizen-tools.github.io/commitizen/) is fully setup to use the conventional style of commit messages.
  - Additionally, [devmoji](https://github.com/folke/devmoji) has been setup to emojify commit messages. These are also setup as a `prepare-commit-msg` git hook. If you wish to remove it, please update `.husky/prepare-commit-msg` and `package.json`.
- Release with [semantic-release](https://www.npmjs.com/package/semantic-release). If you use a proper [Commit Message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format), you'll never have to manually version and publish NPM packages again.
- Test with [Jest](https://jestjs.io/).
- Builds using [Rollup](https://rollupjs.org/guide/en/).
- GitHub Action to build and release to NPM automatically.

## How to Use?

- Search `storybook-react-starter` and replace it with your custom package name.
- Search `Abhishek Bhardwaj` and replace it with your name.
- Check `.releaserc` to enable/disable the `semantic-release` plugins you may or may not want. The following plugins are initially setup:

    - [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
    - [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
    - [@semantic-release/changelog](https://github.com/semantic-release/changelog)
    - [@semantic-release/npm](https://github.com/semantic-release/npm)
    - [@semantic-release/github](https://github.com/semantic-release/github)
    - [@semantic-release/git](https://github.com/semantic-release/git)

- The GitHub action will automatically generate release notes and a changelog. It will also automatically publish to NPM and also make a TAR ball and add it to `GitHub Releases`. To use it properly, please generate the following tokens:

    - `GITHUB_TOKEN` - Generate a Personal Access Token that you can use to authenticate your own user.
      - When using the GITHUB_TOKEN, the [minimum required permissions](https://github.com/semantic-release/github#github-authentication) are:

            - `contents`: write to be able to publish a GitHub release
            - `issues`: write to be able to comment on released issues
            - `pull-requests`: write to be able to comment on released pull requests

    - `NPM_TOKEN` - [Generate an access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) on NPMJS.com to automatically publish the release.

- To skip CI, add `skip ci` to commit message.
- To skip release, add `skip release` to commit message.


## Usage

Once published to your private or public NPM, you can install and use this library in any React project.
If you use TailwindCSS, use the `./src/tailwind.preset.ts` file to do all your customization. This file is used by both the library, the Storybook and is also exported for use in your project.

In your `tailwind.config.ts` file, import the preset and use it as follows (just an example):

```ts
import { type Config } from 'tailwindcss'
import tailwindPreset from '~/LIBRARY/tailwind.preset'

export default {
  ...,
  presets: [
    // Custom Tailwind Preset. This will be part of the exported package - which can then be easily imported into child projects
    tailwindPreset,
  ],
  ...,
} satisfies Config
```

## Writing Tests

- Visual Tests: https://storybook.js.org/docs/react/writing-tests/visual-testing
  - With Chromatic: https://storybook.js.org/docs/react/writing-tests/visual-testing#setup-chromatic-addon
  - Self-hosted:
    - https://github.com/storybookjs/storybook/tree/next/code/addons/storyshots-core
    - https://github.com/storybookjs/storybook/tree/main/code/addons/storyshots-puppeteer#imagesnapshots
- Accessibility Tests: https://storybook.js.org/docs/react/writing-tests/accessibility-testing
- Interaction Tests: https://storybook.js.org/docs/react/writing-tests/interaction-testing#write-an-interaction-test
- Snapshot Tests: https://storybook.js.org/docs/react/writing-tests/snapshot-testing

## Helpful Commands

| Commands | Description |
|---|---|
| `build` | Uses Rollup to build the source directory and places the output in `dist/`. Builds both ESM and CJS. |
| `dev:commit` | Launches an interactive terminal-based commit message writer. Uses [commitizen](https://commitizen-tools.github.io/commitizen/). |
| `dev` | Launches Storybook's Dev server and opens Chrome at https://localhost:6006. |
| `storybook:build` | Builds a static Storybook site and places it in the `build/` folder. You may then host it anywhere you like. |
| `storybook:build:run` | Runs the static Storybook site placed in the `build/` folder. |
| `dev:open-bundle-visualizer` | Rollup is configured to generate an HTML file that lets you visualize and analyze your Rollup bundle to see which modules are taking up space in the final exported bundle. The file is `rollup-plugin-visualizer-stats.html` and this command will automatically open it up in your default browser. |
| `test` | Runs the Jest based test-suite. |
| `test:ci` | To run tests in CI environments. |
| `lint` | Runs ESLint / Prettier to lint source code and display the issues. |
| `format` | Runs ESLint / Prettier to lint source code and automatically format what can be fixed. |
| `clean` | Deletes all auto-generated files and cleans up the folder. |
| `typecheck` | Basically runs `tsc` with `noEmit` enabled to check if Typescript has any issues. If there are issues, they're printed on console for the developer to correct. |
