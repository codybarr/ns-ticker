# ns-ticker

Simple Svelte web component for implementing a countdown timer.

## How to use

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="ns-ticker Demo" />
    <title>ns-ticker Demo</title>
  </head>
  <body>
    <ns-ticker
      date="2021-04-22T13:00:02"
      separator=":"
      responsive="true"
    ></ns-ticker>

    <script
      type="module"
      async
      src="https://unpkg.com/@nosweat/ticker"
    ></script>
  </body>
</html>
```

**props**

- `date` - must be a valid date, use the format above.
- `separator` - string to separate the ticker elements by (default is "/")
- `responsive` - boolean, add if you want responsive styles (otherwise the ticker will always appear on one line)

## Styling

Since this is a web component it's a little diffult to style, but you can reach into the component using css variables.

Apply your styles to the body, eg.:

```
  <style>
    body {
      --ns-ticker-font-family: 'Helvetica';
    }
  </style>
```

Here are the css vars that have been exposed for customizing:

`--ns-ticker-font-family`

Changes the font family for the entire ticker component.

`--ns-ticker-font-size`

Changes the font size of the countdown numbers and separators.

`--ns-ticker-label-font-size`

Changes the font size of the day/hour/minute/seconds labels.

`--ns-ticker-grid-row-gap` / `--ns-ticker-grid-column-gap`

Changes the gap / spacing between the ticker rows / columns.
