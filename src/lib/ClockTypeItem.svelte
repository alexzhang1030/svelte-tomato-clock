<script lang="ts" context="module">
  export const titleMap = {
    [TypeEnum.Work]: ['Working', 'Pausing'],
    [TypeEnum.Break]: ['Breaking', 'Breaking Pause'],
    [TypeEnum.LongBreak]: ['Long Break', 'Long Break Pause'],
  }
</script>

<script lang="ts">
  import { getCountdownTime } from '@/hooks/useCountdown'
  import { TypeEnum } from '@/hooks/useType'
  import {
    currentSeconds,
    currentType,
    isStart,
    setCurrentType,
  } from '@/store/index'
  import { get } from 'svelte/store'

  currentType.subscribe(v => {
    const titles = titleMap[v]
    const pageTitle =
      (get(isStart) ? titles[0] : titles[1]) +
      `: ${getCountdownTime(get(currentSeconds))}`
    document.title = pageTitle
  })

  export let type: TypeEnum
</script>

<div
  class="cursor-pointer 
  {$currentType === type ? 'font-bold  bg-dark-400/30  rounded-[5px]' : ''} 
    sm:px-4 sm:py-2 text-2xl
    flex justify-center
    text-white box-border item"
  class:active-item={$currentType === type}
  on:click={() => {
    setCurrentType(type)
  }}
>
  {#if type === TypeEnum.Work}
    Working
  {:else if type === TypeEnum.Break}
    Short Break
  {:else}
    Long Break
  {/if}
</div>

<style>
  .item:active {
    transform: translateY(2px);
  }
  .active-item {
    transform: translateY(2px);
  }
</style>
