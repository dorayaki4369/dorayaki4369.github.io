<script lang="ts">
  export let colorName: string;
  export let level: number;

  const varName = `--color-${colorName}-${level}`;
</script>

<div class="card">
  <div class="header" style="--bg: var({varName})"></div>
  <p>
    {level}
  </p>
</div>

<style>
  * {
    --bg: red;
  }

  .card {
    display: grid;
    grid-gap: var(--s-3);
    grid-template-rows: 1fr 1fr;
    width: 5em;
  }

  .header {
    border-radius: var(--rounded);
    background-color: var(--bg);
  }
</style>
