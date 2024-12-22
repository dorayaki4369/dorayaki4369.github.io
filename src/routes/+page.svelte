<script>
  import Center from "$lib/components/Center.svelte";
</script>

<svelte:head>
  <title>dryk.net</title>
  <meta name="description" content="dryk.net homepage" />
</svelte:head>

<Center>
  <section>
    <h1>Hello!</h1>
  </section>
</Center>

<style lang="scss">
  @use "../styles/variable" as vars;

  section {
    margin-block: vars.s(2);
  }
</style>
