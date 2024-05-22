# @swmansion/icons
React and React Native components for Software Mansion icon pack.

[Check out the web Example app](https://github.com/software-mansion-labs/swm-icon-pack-react/tree/main/example)

[Check out the native Example app](https://github.com/software-mansion-labs/swm-icon-pack-react/tree/main/exampleNative)

- [Browse icons](#browse-icons)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available props](#available-props)
- [Contributing](#contributing)

## Browse icons

[Check out the swm-icon-pack on Figma](https://www.figma.com/community/file/942053544758339202/swm-icon-pack)

## Features

1. Ready to use React / React Native components.
2. Uses .svg under the hood in React and .ttf in React Native for optimal performance.
3. Customizable variant, size and color.

## Installation
### React
1. Install library

```bash
yarn add @swmansion/icons
```

### Bare React Native
1. Install library

```bash
yarn add @swmansion/icons
```
2. On iOS and Android you also have to link fonts with your native code. The easiest way to do that is creating `react-native.config.js` file at the root of your project with:

```javascript
const path = require('path')

module.exports = {
  project: {},
  assets: [path.join(__dirname, 'node_modules', '@swmansion/icons', 'fonts')],
}
```
3. Link assets:

```bash
npx react-native-asset
```

### Expo managed workflow
1. Install library

```bash
yarn add @swmansion/icons
```
2. Link icon fonts with native code. Follow Expo [instruction](https://docs.expo.dev/develop/user-interface/fonts/#use-a-custom-font). When you are using config plugins with SDK 50 and above you can just install `expo-font` and configure it in `app.json`:
```json
{
  "expo": {
    "plugins": [
      [
        "expo-font",
        {
          "fonts": [
            "./node_modules/@swmansion/icons/fonts/broken/swm-icons-broken.ttf",
            "./node_modules/@swmansion/icons/fonts/outline/swm-icons-outline.ttf",
            "./node_modules/@swmansion/icons/fonts/curved/swm-icons-curved.ttf"
          ]
        }
      ]
    ]
  }
}
```
3. Remember to rebuild native part of your app.

## Usage

```jsx
import React from 'react';
import { Icon } from '@swmansion/icons';

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

## Contributing

### Updating icons
1. Export icons from Figma in SVG format.
2. Put icons in the proper subdirectory inside `icons/`.
3. Convert svg icons to font. Remember to replace `iconType` and `font-name` with proper values:
```bash
yarn generate-icons -i icons/iconType -o fonts/iconType -f font-name
```
4. Rebuild library.

### Adding new icon variant
1. Repeat steps 1-3 from [updating icons section](#updating-icons). Remember to create new subdirectory inside `icons/`.
2. Add icons config to the `iconMap` in `/react-native-icon-pack/src/Icon/Icon.tsx`.
3. Add icons config to the `iconVariants` in `/react-icon-pack/src/Icon.tsx`.
4. Rebuild library.
