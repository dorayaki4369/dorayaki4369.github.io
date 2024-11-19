<script lang="ts">
  import Center from "$lib/components/Center.svelte";

  const year = new Date().getFullYear();
</script>

<footer>
  <Center alignChildren={true}>
    <small>
      &copy; {year} Ryuya Hirayama
    </small>
  </Center>
</footer>

<style>
  footer {
    padding: var(--s-1);
  }
</style>
