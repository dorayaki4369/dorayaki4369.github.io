<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    semantic: "error" | "success" | "warning" | "info" | "normal";
    icon?: Snippet;
    title?: string;
    children: Snippet;
  };

  const { semantic, icon, title, children }: Props = $props();
</script>

<aside data-semantic={semantic} data-has-icon={!!icon}>
  {#if icon}
    {@render icon()}
  {/if}
  <p data-has-title={!!title}>
    {#if title}
      <strong>{title}</strong>
      <br />
    {/if}

    {@render children()}
  </p>
</aside>

<style lang="scss">
  @use "../../styles/variable" as v;

  * {
    --gap: #{v.s(0)};
  }

  aside {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: var(--gap);
    border-radius: var(--rounded);
    padding: var(--gap);
  }

  aside {
    --bg: var(--color-bg-5);
    --color: var(--color-on-bg);

    background-color: var(--bg);

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

  aside[data-has-icon="true"] {
    & :global(svg):first-of-type {
      min-inline-size: 1em;
      color: blue;
    }
  }

  aside > p[data-has-title="true"] {
    & > strong:first-of-type {
      display: inline-block;
      margin-block-end: v.s(0);
    }
  }
</style>
