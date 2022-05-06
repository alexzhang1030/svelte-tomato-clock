<script lang="ts">
  import ClockTypeItem from './ClockTypeItem.svelte'
  import { Types } from '@/hooks/useType'
</script>

<div class="w-full flex justify-center">
  {#each Types as type}
    <ClockTypeItem {type} />
  {/each}
</div>
