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
    <style>
      .custom-days {
        font-size: 2em;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <ns-ticker date="2022-05-24T10:00:02">
      <ns-show>
        <span class="custom-days"><ns-days></ns-days></span> :
        <ns-hours></ns-hours> : <ns-minutes></ns-minutes> :
        <ns-seconds></ns-seconds>
      </ns-show>
      <ns-show done>Congratulations! You made it to the finish line </ns-show>
    </ns-ticker>

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

## Styling

As of version 2.0 `ns-ticker` has been re-written to use headless components.

So you can compose a few different components and style the library as you see fit with your own markup.

### `<ns-ticker>`

Everything needs to be wrapped in a `<ns-ticker>` element. This provides information to each sub-component from the global store.

### `<ns-show>`

Wrap the content you want to show (before the expire time) in an `<ns-show>` element.

Add the `done` prop to to only show the children of `<ns-show>` when the countdown has expired. Eg:

```html
<ns-show done>
  <p>The countdown has expired</p>
</ns-show>
```

### `<ns-days>`

`<ns-days>` is a simple component that displays the number of days remaining.

### `<ns-hours>`

`<ns-hours>` is a simple component that displays the number of hours remaining.

### `<ns-minutes>`

`<ns-minutes>` is a simple component that displays the number of minutes remaining.

### `<ns-seconds>`

`<ns-seconds>` is a simple component that displays the number of seconds remaining.
