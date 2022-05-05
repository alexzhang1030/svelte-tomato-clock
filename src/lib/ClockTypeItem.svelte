<script>
  export let isStart = false
</script>

<div
  class="font-bold cursor-pointer bg-dark-400/30 px-4 py-2 rounded-[5px] text-white box-border"
>
  {#if isStart} Working {:else} Resting {/if}
</div>
