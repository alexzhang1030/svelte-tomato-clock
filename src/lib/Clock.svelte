<script lang="ts">
  import ClockType from './ClockType.svelte'
  import {
    getCountdownTime,
    initSeconds,
    useCountdown,
  } from '../hooks/useCountdown'

  let [seconds, currentTime, isStart] = useCountdown()

  function reset() {
    isStart = false
    seconds = initSeconds
  }

  setInterval(() => {
    if (isStart) {
      if (seconds <= 0) return reset()
      seconds -= 1
    }
  }, 1000)

  $: pageTitle = (isStart ? 'Working' : 'Pausing') + ': ' + currentTime

  $: currentTime = getCountdownTime(seconds)
</script>

<main class="bg-white/15 w-[80%] rounded-md p-[20px] box-border">
  <ClockType {isStart} />
  <div class="text-[120px] mt-[20px] font-bold text-white flex justify-center">
    {currentTime}
  </div>
  <div class="mt-[40px] flex justify-center">
    <button
      class="uppercase w-[40%] text-[22px] h-[60px] rounded-md flex justify-center items-center bg-white text-red-600 font-bold"
      class:isStart={!isStart}
      class:isEnd={isStart}
      on:click={() => (isStart = !isStart)}
    >
      {#if isStart} end {:else} start {/if}
    </button>
  </div>
</main>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<style>
  .isStart {
    box-shadow: rgb(235 235 235) 0px 6px 0px;
  }
  .isEnd {
    transform: translateY(6px);
  }
</style>
