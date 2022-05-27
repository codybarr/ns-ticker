<svelte:options tag="ns-show" />

<script>
  import { finished } from './store'

  export let done = false

  $: show = done === '' ? $finished : !$finished

  $: console.log({ done, show, finished: $finished })
</script>

{#if show}
  <slot />
{/if}
