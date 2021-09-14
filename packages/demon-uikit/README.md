# 😈 Demon UIkit

[![Version](https://img.shields.io/npm/v/@demonswap/uikit)](https://www.npmjs.com/package/@demonswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@demonswap/uikit)](https://www.npmjs.com/package/@demonswap/uikit)

Demon UIkit is a set of React components and hooks used to build pages on Demon's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @demonswap/uikit`

## Setup

### Theme

Before using Demon UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@demonswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@demonswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://demonswap.github.io/toolkit/)
