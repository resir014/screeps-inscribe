# screeps-inscribe

> A one-size-fits-all toolbox for detailed logging in TypeScript-based Screeps codes.

## Installation

```bash
# npm
npm install --save screeps-inscribe

# yarn
yarn add screeps-inscribe
```

## Usage

To enable accessing Inscribe commands through the CLI, you should add `screeps-inscribe` to your global. To do this, add the following to your `main.js`, outside of the game loop.

```ts
import Inscribe from 'screeps-inscribe'

global.Inscribe = Inscribe()
```

If you use TypeScript, don't forget to include `Inscribe: any` in the `Global` interface of your declaration file as well.

```ts
declare namespace NodeJS {
  interface Global {
    // ...
    Inscribe: any
    // ...
  }
}
```

`screeps-inscribe` doesn't have any extra dependencies, and can be easily integrated to your existing logging utility.

```js
import * as Inscribe from 'screeps-inscribe'

console.log(`[${Inscribe.color('main', 'skyblue')}] Scripts bootstrapped`)
```

## Contributing

This codebase uses [husky](https://github.com/typicode/husky) to auto-compile changes on commit.

To get started, simply clone this repository, and run `npm install`. After that, make any changes you want in `src/`. When you commit the changes, husky will first automatically run `npm run compile` and compile your changes.

## API Reference

### color

`Inscribe.color(str: string, fontColor: string): string`

Decorates a string of text with color.

#### Parameters

- `str: string` The string to format.
- `fontColor: string` Any HTML color name (`teal`) or hex code (`#33b5e5`).

Returns: A string output of the color-formatted text.

### link

`Inscribe.link(href: string, title: string): string`

Appends a link to log output

#### Parameters

- `href: string` Any string-escaped link.
- `title: string` The link title.

Returns: A console output string with link.

### tooltip

`Inscribe.tooltip(str: string, tooltipText: string): string`

Allows tooltip to be sent to the formatter

#### Parameters

- `str: string` The string to format
- `tooltipText: string` The tooltip text to give away

Returns: The tooltipped text for the Screeps console.

### time

`Inscribe.time(color?: string)`

Outputs a formatted version of `Game.time`

#### Parameters

- `color?: string` Any HTML color name (`teal`) or hex code (`#33b5e5`). Defaults to `gray` if empty.

Returns: A pretty-formatted `Game.time`.
