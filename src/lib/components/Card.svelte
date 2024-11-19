<script lang="ts">
  export let title: string;
  export let headingLevel: 2 | 3 | 4 | 5 | 6 = 2;
</script>

<article>
  <header>
    {#if (headingLevel = 2)}
      <h2>{title}</h2>
    {:else if (headingLevel = 3)}
      <h3>{title}</h3>
    {:else if (headingLevel = 4)}
      <h4>{title}</h4>
    {:else if (headingLevel = 5)}
      <h5>{title}</h5>
    {:else}
      <h6>{title}</h6>
    {/if}
  </header>

  <p>
    <slot />
  </p>
</article>

<style>
  article {
    cursor: pointer;
    box-shadow: 0.15em 0.15em 0.5em var(--color-shadow);
    border-radius: var(--rounded);
    background-color: var(--color-bg-2);
    padding: 1em;

    &:hover {
      background-color: var(--color-bg-3);
    }

    & > * + * {
      margin-top: 1em;
    }
  }

  header {
    border-bottom: var(--border-thin) solid var(--color-primary);
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
