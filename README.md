# swm-icon-pack-react
React component for swm-icon-pack 

![cover](/images/intro.png)

`swm-icon-pack-react` enables Software Mansion Icon Pack usage in your React app

[Check out the Example app](https://github.com/software-mansion-labs/swm-icon-pack-react/tree/main/example)

- [Browse icons](#browse-icons)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available props](#available-props)
- [TODO](#todo)

## Browse icons

[Check out the icon pack on Figma](https://www.figma.com/community/file/942053544758339202/swm-icon-pack)

## Features

1. Ready to use React / React Native components
2. Uses .svg under the hood in React and .ttf in React Native for optimal performance
3. Customizable variant, size and color

## Installation

```bash
yarn add swm-icon-pack-react
```

## Usage

```jsx
import React from 'react';
import { Icon } from '@swm-labs/swm-icon-pack-react';

const App = () => {
  return (
    <>
      <Icon name='arrow-right' />;
      <Icon name='arrow-left' type='outline' size={36} color='red' />;
    </>
  )
};

export default App;
```

## Available props

| Prop          | Type                                  | Default   | Description                                     |
| ------------- | ------------------------------------- | --------- | ----------------------------------------------- |
| `name` (required)       | `string`                              |           | Name of the icon you want to render                     |                      |
| `type`     | `outline` `broken` `curved` | `outline` | Selected type of the icon                                |
| `size`        | `number`                     | `24`      | Width and height of the icon |                         |
| `color`       | `string`                              | `black` / `inherit` | Color of the icon                     |


## TODO

1. Add ts autocomplete to web and native implementations
