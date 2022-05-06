<script lang="ts">
  import { TypeEnum } from '@/hooks/useType'
  import { currentType, setCurrentType } from '@/store/index'

  let cType: TypeEnum

  currentType.subscribe(t => (cType = t))

  export let type: TypeEnum
</script>

<div
  class="cursor-pointer 
  {cType === type ? 'font-bold  bg-dark-400/30  rounded-[5px]' : ''} 
    px-4 py-2 text-[18px]
    text-white box-border item"
  class:active-item={cType === type}
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
