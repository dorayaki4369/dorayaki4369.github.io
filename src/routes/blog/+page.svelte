<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "$lib/components/Card.svelte";
  import Center from "$lib/components/Center.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Blog - dryk.net</title>
  <meta name="description" content="dryk.net blog" />
</svelte:head>

<Center>
  <section>
    <h1>Blog posts</h1>

    <ol>
      {#each data.posts as { slug, title }}
        <li>
          <Card {title} link={{ href: `/blog/${slug}` }} />
        </li>
      {/each}
    </ol>
  </section>
</Center>

<style lang="scss">
  @use "../../styles/variable" as vars;

  section {
    margin-block: vars.s(2);
  }

  ol {
    margin-block-start: vars.s(4);
  }
</style>
