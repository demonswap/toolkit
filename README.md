# Demon Toolkit

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/). 

## Packages

- [demon-uikit](https://github.com/demonswap/demon-toolkit/tree/master/packages/demon-uikit) : React components used to build the Demon UI
- [eslint-config-pancake](https://github.com/demonswap/pancake-toolkit/tree/master/packages/eslint-config-pancake) : An ESLint config for pancake, with Typescript and Prettier support
- [pancake-profile-sdk](https://github.com/demonswap/pancake-toolkit/tree/master/packages/pancake-profile-sdk) : Handy functions to retrieve data for Demonswap Profile system
- [token-lists](https://github.com/demonswap/pancake-toolkit/tree/master/packages/token-lists) : Main DemonSwap token list and tools to validate it

## How to use

Clone the repository 

```
git clone git@github.com:demonswap/pancake-toolkit.git
```

Run yarn at the root of the workspace

```
cd pancake-toolkit
yarn
```

Then, refer to the readme of each project.
