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
    <ns-ticker date="2021-04-22T13:00:02"></ns-ticker>

    <script
      type="module"
      async
      src="https://unpkg.com/@nosweat/ticker"
    ></script>
  </body>
</html>
```

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

Here are the css vars that are available now:

`--ns-ticker-font-family`

Changes the font family.
