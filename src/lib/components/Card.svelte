<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const {
    title,
    link,
    children,
  }: {
    title: ComponentProps<typeof Heading>["title"];
    link?: HTMLAnchorAttributes;
    children?: Snippet;
  } = $props();
</script>

{#snippet contents()}
  <header>
    <Heading {title} level={3} />
  </header>

  {#if children}
    <div>
      {@render children()}
    </div>
  {/if}
{/snippet}

{#if link}
  <a {...link} data-disable-underline="true">
    <article>
      {@render contents()}
    </article>
  </a>
{:else}
  <article>
    {@render contents()}
  </article>
{/if}

<style lang="scss">
  @use "../../styles/variable" as vars;

  article {
    box-shadow: 0.15em 0.15em 0.5em var(--color-shadow);
    border-radius: var(--rounded);
    background-color: var(--color-bg-2);
    padding: 1em;

    &:has(a) {
      &:hover {
        background-color: var(--color-bg-3);
      }
    }
  }

  a {
    display: block;
    text-decoration: none;

    &::after {
      display: none;
    }
  }

  header {
    margin-block-end: vars.s(-3);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 1.25em;
  }
</style>
