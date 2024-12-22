<script lang="ts">
  import Center from "$lib/components/Center.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: component = data.component;
</script>

<svelte:head>
  <title>{data.frontmatter.title} - dryk.net</title>
  <meta name="description" content={data.frontmatter.description} />
</svelte:head>

<Center>
  <article>
    <h1>{data.frontmatter.title}</h1>

    <div>
      <svelte:component this={component} />
    </div>
  </article>
</Center>

<style lang="scss">
  @use "../../../styles/variable" as vars;

  article {
    margin-block: vars.s(2);
  }

  h1 {
    margin-block-end: vars.s(4);
  }

  div {
    & > :global(*) + :global(*) {
      margin-block-start: vars.s(0);
    }

    & > :global(h2) {
      margin-block-start: vars.s(3);
    }

    & > :global(h3) {
      margin-block-start: vars.s(2);
    }

    & > :global(h4) {
      margin-block-start: vars.s(1);
    }

    & > :global(h5) {
      margin-block-start: vars.s(0.5);
    }
  }
</style>
