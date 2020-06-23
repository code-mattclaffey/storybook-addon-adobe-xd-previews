# Storybook Adobe XD

> A adobe xd design reference tool

## Installation

```
  yarn add storybook-addon-adobe-xd --dev
```

addons.js

```js
import 'storybook-addon-adobe-xd/register'
```

## Usage

### MDX format

```jsx
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks'
import { WithAdobePreview } from 'storybook-addon-adobe-xd'

<Meta title="Example" />

<Preview>
  <Story name="default">
    <WithAdobePreview previewId="insert-id-here">
      <h1>Hello World</h1>
    </WithAdobePreview>
  </Story>
</Preview>
```

### CSF format

```jsx
import { WithAdobePreview } from 'storybook-addon-adobe-xd'

export const helloWorld = () => (
  <WithAdobePreview previewId="insert-id-here">
    <h1>Hello World</h1>
  </WithAdobePreview>
)
```
