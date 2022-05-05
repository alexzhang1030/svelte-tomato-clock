<script lang="ts">
  import ClockTypeItem from './ClockTypeItem.svelte'

  export let isStart = false
</script>

<div class="w-full flex justify-center">
  <ClockTypeItem {isStart} />
</div>
