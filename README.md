# babel-plugin-transform-stitches-display-name

Babel plugin to add displayName to your styled component

## Input

```js
let foo = styled('div', {});
```

## Output

```js
let foo = Object.assign({}, styled('div', {}), {
  displayName: "foo"
});

```

## Installation

```sh
$ npm install babel-plugin-transform-stitches-display-name
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-stitches-display-name"]
}
```

### Via CLI

```sh
$ babel --plugins transform-stitches-display-name script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  plugins: ["transform-stitches-display-name"],
});
```

## Acknowledgements

This plugin is adapted from [@babel/plugin-transform-react-display-name](https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-react-display-name) many thanks to the Babel team.
