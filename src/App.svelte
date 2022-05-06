<script lang="ts">
  import { color } from '@/store/index'
  import { onMount } from 'svelte'
  import { requestPermission } from './hooks/useNotification'
  import Clock from './lib/Clock.svelte'

  onMount(() => {
    requestPermission()
  })
</script>

<main
  class="w-full {$color} h-[100vh] transition-colors flex justify-center items-start p-5 box-border"
>
  <main class="w-[40rem] flex justify-center flex-wrap">
    <h1
      class="text-white text-[2rem] font-bold pb-4 mb-4 box-border border-b-4 w-full text-center"
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
