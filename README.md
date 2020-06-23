# Storybook Abstract Addon

> A abstract design reference tool

![Storybook Addon For Abstract](https://raw.githubusercontent.com/code-mattclaffey/storybook-addon-abstract/master/abstract-panel.png)

## Installation

```
  yarn add storybook-addon-abstract --dev
```

addons.js

```js
import 'storybook-addon-abstract/register'
```

## Usage

### MDX format

```jsx
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks'
import { WithAdobePreview } from 'storybook-addon-adobe-xd'

<Meta title="Example" />

<Preview>
  <Story name="default">
    <WithAdobePreview previewId="92ca240b-a770-4116-7153-113190e4e932-e4fb">
      <h1>Hello World</h1>
    </WithAdobePreview>
  </Story>
</Preview>
```

### CSF format

```jsx
import { WithAdobePreview } from 'storybook-addon-adobe-xd'

export const helloWorld = () => (
  <WithAdobePreview previewId="92ca240b-a770-4116-7153-113190e4e932-e4fb">
    <h1>Hello World</h1>
  </WithAdobePreview>
)
```
