<script lang="ts">
  export let maxWidth: string = "var(--measure)";
  export let gutters: string = "var(--s1)";
  export let alignText: boolean = false;
  export let alignChildren: boolean = false;
</script>

<div
  style="--max-width: {maxWidth}; --gutters: {gutters}"
  data-align-text={alignText}
  data-align-children={alignChildren}
>
  <slot />
</div>

<style>
  * {
    --max-width: var(--measure);
    --gutters: var(--s1);
  }

  div {
    box-sizing: content-box;
    margin-inline: auto;
    padding-inline: var(--gutters);
    max-inline-size: var(--max-width);

    &[data-align-text="true"] {
      text-align: center;
    }

    &[data-align-children="true"] {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
