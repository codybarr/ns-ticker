<svelte:options tag="ns-ticker" />

<script>
  import { onMount } from 'svelte'
  import { isValid, differenceInSeconds } from 'date-fns'

  const SECONDS_IN_DAY = 86400 // 60 * 60 * 24
  const SECONDS_IN_HOUR = 3600 // 60 * 60

  const maxFloorPad = (val) =>
    Math.max(Math.floor(val), 0).toString().padStart(2, '0')

  export let date
  export let separator = '/'

  let time = new Date()
  let valid = isValid(new Date(date))

  $: difference = differenceInSeconds(new Date(date), time)
  $: finished = difference <= 0

  // these automatically update when `now`
  // changes, because of the `$:` prefix
  $: daysAway = maxFloorPad(difference / SECONDS_IN_DAY)
  $: hoursAway = maxFloorPad((difference % SECONDS_IN_DAY) / SECONDS_IN_HOUR)
  $: minutesAway = maxFloorPad((difference % SECONDS_IN_HOUR) / 60)
  $: secondsAway = maxFloorPad(difference % 60)

  $: datetime = `P${daysAway}DT${hoursAway}H${minutesAway}M${secondsAway}S`

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date()
    }, 1000)

    return () => clearInterval(interval)
  })
</script>

<section class="ns-ticker">
  {#if valid}
    <time class="ticker" {datetime}>
      <div class="days tile">{daysAway}</div>
      <div class="days-separator separator">{separator}</div>
      <div class="hours tile">{hoursAway}</div>
      <div class="hours-separator separator">{separator}</div>
      <div class="minutes tile">{minutesAway}</div>
      <div class="minutes-separator separator">{separator}</div>
      <div class="seconds tile">{secondsAway}</div>
      <div class="days-label label mb-8">DAYS</div>
      <div class="hours-label label mb-8">HOURS</div>
      <div class="minutes-label label">MINUTES</div>
      <div class="seconds-label label">SECONDS</div>
    </time>
  {:else}
    <p>
      Invalid date "{date}" Please use the following format:
      "2021-04-20T15:39:00."
    </p>
  {/if}
</section>

<style global lang="postcss">
  .ticker {
    font-family: var(--ns-ticker-font-family, 'monospace, monospace');
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr auto;
    grid-template-areas:
      'days days-separator hours'
      'days-label . hours-label'
      'minutes minutes-separator seconds'
      'minutes-label . seconds-label';
  }
  .tile {
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.875rem;
    line-height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .separator {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
  }
  .label {
    margin: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .days {
    grid-area: days;
  }
  .days-separator {
    grid-area: days-separator;
  }
  .hours {
    grid-area: hours;
  }
  .hours-separator {
    grid-area: hours-separator;
    display: none;
  }
  .minutes {
    grid-area: minutes;
  }
  .minutes-separator {
    grid-area: minutes-separator;
  }
  .seconds {
    grid-area: seconds;
  }
  .days-label {
    grid-area: days-label;
  }
  .hours-label {
    grid-area: hours-label;
  }
  .minutes-label {
    grid-area: minutes-label;
  }
  .seconds-label {
    grid-area: seconds-label;
  }

  @media (min-width: 768px) {
    .ticker {
      grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
      grid-template-rows: 1fr auto;
      grid-template-areas:
        'days days-separator hours hours-separator minutes minutes-separator seconds'
        'days-label . hours-label . minutes-label . seconds-label';
    }

    .hours-separator {
      display: flex;
    }
  }
</style>
