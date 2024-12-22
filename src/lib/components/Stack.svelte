<script lang="ts">
  import type { CssSpace } from "$lib/type";
  import type { Snippet } from "svelte";

  const {
    children,
    space = "var(--s0)",
  }: { children: Snippet; space?: CssSpace } = $props();
</script>

<div style={`--gap: ${space}`}>
  {@render children()}
</div>

<style lang="scss">
  @use "../../styles/variable" as vars;

  * {
    --gap: #{vars.s(0)};
  }

  div > :global(*) + :global(*) {
    margin-block-start: var(--gap);
  }
</style>
