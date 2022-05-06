<script lang="ts">
  import { color } from '@/store/index'
  import Clock from './lib/Clock.svelte'
</script>

<main
  class="w-full {$color} h-[100vh] transition-colors flex justify-center items-start p-5 box-border"
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
