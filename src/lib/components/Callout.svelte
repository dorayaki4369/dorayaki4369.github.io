<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { mdiAccount } from "@mdi/js";

  export let semantic: "error" | "success" | "warning" | "info" | "normal" =
    "normal";
</script>

<aside data-semantic={semantic}>
  <slot name="icon">
    {#if semantic === "error"}
      <Icon path={mdiAccount} />
    {/if}
  </slot>
  <div>
    <slot />
  </div>
</aside>

<style>
  * {
    --gap: var(--s0);
  }

  aside {
    --bg: var(--color-bg-5);
    --color: var(--color-on-bg);
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: var(--gap);
    border-radius: var(--rounded);
    background-color: var(--bg);

    padding: var(--gap);

    &[data-semantic="error"] {
      --bg: var(--color-error);
      --color: var(--color-on-error);
    }

    &[data-semantic="success"] {
      --bg: var(--color-success);
      --color: var(--color-on-success);
    }

    &[data-semantic="warning"] {
      --bg: var(--color-warning);
      --color: var(--color-on-warning);
    }

    &[data-semantic="info"] {
      --bg: var(--color-info);
      --color: var(--color-on-info);
    }

    & :global(*) {
      color: var(--color);
    }
  }
</style>
