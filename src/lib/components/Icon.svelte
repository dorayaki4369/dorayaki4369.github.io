<script lang="ts">
  export const label: string | undefined = undefined;
  export let path: string;
  export const size: string = "var(--s1)";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  style="--size: {size}"
>
  {#if label}
    <title>{label}</title>
  {/if}
  <path d={path}></path>
</svg>

<style>
  * {
    --size: var(--s1);
  }

  svg {
    width: var(--size);
    height: var(--size);
    fill: currentColor;
    display: inline;
  }
</style>
