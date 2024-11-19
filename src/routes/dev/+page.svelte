<script lang="ts">
  import PalletCard from "$routes/dev/PalletCard.svelte";
  import Center from "$lib/components/Center.svelte";

  const colorNames = [
    "ash",
    "charcoal",
    "maroon",
    "scarlet",
    "amber",
    "lemon",
    "lime",
    "forest",
    "sky",
    "midnight",
    "violet",
    "magenta",
    "crimson",
  ];
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>

<svelte:head>
  <title>for developer contents | dryk.net</title>
  <meta name="description" content="dryk.net for developer contents" />
</svelte:head>

<Center>
  <h1>For developers</h1>

  <section>
    <h2>Base</h2>

    <section>
      <h3>Color pallet</h3>

      <div class="pallet">
        {#each colorNames as colorName}
          <div class="pallet-col">
            <h4>{colorName}</h4>
            <div class="color-list">
              {#each levels as level}
                <PalletCard {colorName} {level} />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>
  </section>

  <section>
    <h2>Theme</h2>

    <section>
      <h3>Color</h3>

      <div class="background" data-bg-level="1">
        <p>Background 1</p>

        <div class="background" data-bg-level="2">
          <p>Background 2</p>

          <div class="background" data-bg-level="3">
            <p>Background 3</p>

            <div class="background" data-bg-level="4">
              <p>Background 4</p>

              <div class="background" data-bg-level="5">
                <p>Background 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</Center>

<style>
  * {
    --gap: var(--s1);
  }

  section {
    padding: var(--gap);
  }

  .pallet {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    border-radius: var(--rounded);
    padding: var(--gap);
  }

  .pallet-col {
    display: flex;
    flex-direction: column;
    gap: var(--s-1);

    & h4 {
      font-size: var(--s0);
      text-transform: capitalize;
    }
  }

  .color-list {
    display: flex;
    flex-direction: row;
    gap: var(--s-1);
  }

  .background {
    border-radius: var(--rounded);
    padding: var(--gap);
    color: var(--color-on-bg);

    & > & {
      margin-inline-start: var(--gap);
      margin-block-start: var(--gap);
    }
  }
</style>
