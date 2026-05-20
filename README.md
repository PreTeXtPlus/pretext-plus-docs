# PreTeXt.Plus Documentation

Documentation site for PreTeXt.Plus, built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

Starts a local development server with live reload.

## Build

```bash
npm run build
```

Generates static content into the `build` directory.

## Deployment

Default (auto-detect GitHub user from git config or origin remote owner):

```bash
npm run deploy
```

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Override the detected user if needed:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If using GitHub Pages, this command builds the site and pushes to the `gh-pages` branch.
