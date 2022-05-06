<script lang="ts">
  import ClockType from './ClockType.svelte'
  import { getCountdownTime } from '@/hooks/useCountdown'
  import {
    isStart as StartStore,
    toggleStart,
    btnColor,
    currentSeconds,
    countdown,
    currentType,
  } from '@/store/index'
  import { get } from 'svelte/store'
  import { createNotification } from '@/hooks/useNotification'

  let isStart = false
  StartStore.subscribe(v => {
    isStart = v
  })

  function reset() {
    createNotification(get(currentType))
    toggleStart()
  }

  setInterval(() => {
    if (isStart) {
      if (get(currentSeconds) <= 0) return reset()
      countdown()
    }
  }, 1000)

  let currentTime = ''
  currentSeconds.subscribe(v => {
    currentTime = getCountdownTime(v)
  })
</script>

<main class="bg-white/15 w-[80%] rounded-md p-[30px] pt-[20px] box-border">
  <ClockType />
  <div
    class="text-6xl sm:text-9xl mt-[20px] font-bold text-white flex justify-center"
  >
    {currentTime}
  </div>
  <div class="mt-[40px] flex justify-center">
    <button
      class="uppercase w-[55%] text-[22px] h-[50px] rounded-md flex justify-center items-center bg-white  font-bold {$btnColor}"
      class:isStart={!isStart}
      class:isEnd={isStart}
      on:click={() => toggleStart()}
    >
      {#if isStart} end {:else} start {/if}
    </button>
  </div>
</main>

<style>
  .isStart {
    box-shadow: rgb(235 235 235) 0px 6px 0px;
  }
  .isEnd {
    transform: translateY(6px);
  }
</style>
