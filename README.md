# babel-plugin-transform-stitches-display-name

<p align="center">
<a href="https://www.npmjs.com/package/babel-plugin-transform-stitches-display-name"><img src="https://img.shields.io/npm/dm/babel-plugin-transform-stitches-display-name" /></a>
<a href="https://www.npmjs.com/package/babel-plugin-transform-stitches-display-name"><img src="https://img.shields.io/npm/v/babel-plugin-transform-stitches-display-name" /></a>
<a href="https://www.npmjs.com/package/babel-plugin-transform-stitches-display-name"><img src="https://img.shields.io/github/license/afzalsayed96/babel-plugin-transform-stitches-display-name" /></a>
<a href="https://techforpalestine.org/learn-more" rel="nofollow"><img src="https://camo.githubusercontent.com/1001b2e8cc187a1b0f6d763935ab994a4a79c0090e13752ad68027b8111b152f/68747470733a2f2f62616467652e74656368666f7270616c657374696e652e6f72672f64656661756c74" alt="Ceasefire Now" data-canonical-src="https://badge.techforpalestine.org/default" style="max-width: 100%;"></a>
</p>
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
