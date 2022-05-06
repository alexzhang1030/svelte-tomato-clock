<script lang="ts">
  import { TypeEnum } from './hooks/useType'
  import { currentType } from '@/store/index'
  import Clock from './lib/Clock.svelte'

  let cType: TypeEnum = TypeEnum.Work

  currentType.subscribe(v => {
    cType = v
    console.log('changed', cType)
  })
  const bgMap = {
    [TypeEnum.Work]: 'bg-[#d44b46]',
    [TypeEnum.Break]: 'bg-[#4c9195]',
    [TypeEnum.LongBreak]: 'bg-[#457ca3]',
  }

  $: cBg = bgMap[cType]
</script>

<main
  class="w-full {cBg} h-[100vh] transition-colors flex justify-center items-start p-5 box-border"
>
  <main class="w-[580px] flex justify-center flex-wrap">
    <h1
      class="text-white text-[48px] font-bold pb-4 mb-4 box-border border-b-4 w-full text-center"
    >
      Svelte + Tomato Clock
    </h1>
    <Clock />
  </main>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
