<script lang="ts">
  const {
    level = 3,
    title,
  }: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    title: string;
  } = $props();
</script>

{#if level === 1}
  <h1>{title}</h1>
{:else if level === 2}
  <h2>{title}</h2>
{:else if level === 3}
  <h3>{title}</h3>
{:else if level === 4}
  <h4>{title}</h4>
{:else if level === 5}
  <h5>{title}</h5>
{:else}
  <h6>{title}</h6>
{/if}
