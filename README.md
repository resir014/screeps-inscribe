# screeps-inscribe

> A one-size-fits-all toolbox for detailed logging in TypeScript-based Screeps codes.

## Installation

If you're using a module bundler like Webpack to build your Screeps code (e.g. in [`screeps-typescript-starter`](https://github.com/screepers/screeps-typescript-starter)), you can install `screeps-inscribe` via npm.

```bash
$ npm install --save screeps-inscribe
```

Or you can copy and paste the [vanilla JS implementation](https://gist.github.com/resir014/5b7dee4d6a5c8094f25b6e8d3e1cb35d) into your existing codebase.

## Usage

To enable accessing Inscribe commands through the CLI, you should add `screeps-inscribe` to your global. To do this, add the following to your `main.js`, outside of the game loop.

```js
global.Inscribe = Inscribe.init()
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
