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
    text-white box-border"
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
