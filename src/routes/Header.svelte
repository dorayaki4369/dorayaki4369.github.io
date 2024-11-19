<script lang="ts">
  import HeaderMenu from "$routes/HeaderMenu.svelte";
  import Title from "$routes/Title.svelte";
</script>

<header>
  <div>
    <Title />
  </div>

  <HeaderMenu />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--s0);

    & > * {
      display: flex;
      align-items: center;
    }
  }
</style>
