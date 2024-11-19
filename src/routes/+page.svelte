<script>
  import Callout from "$lib/components/Callout.svelte";
  import Center from "$lib/components/Center.svelte";
</script>

<svelte:head>
  <title>dryk.net</title>
  <meta name="description" content="dryk.net homepage" />
</svelte:head>

<Center>
  <section>
    <button data-role="primary">button</button>
    <div role="button">div button</div>
    <input type="button" value="Submit" />
    <a href="http://example.com" role="button">button</a>
    <Callout semantic="error">
      <h3>Color</h3>
      <p>
        Callout content The CSS align-items property sets the align-self value
        on all direct children as a group. In flexbox, it controls the alignment
        of items on the cross axis. In grid layout, it controls the alignment of
        items on the block axis within their grid areas.
      </p>
    </Callout>

    <Callout semantic="success">
      Color
      <p>
        Callout content The CSS align-items property sets the align-self value
        on all direct children as a group. In flexbox, it controls the alignment
        of items on the cross axis. In grid layout, it controls the alignment of
        items on the block axis within their grid areas.
      </p>
    </Callout>

    <Callout semantic="warning">
      Color
      <p>
        Callout content The CSS align-items property sets the align-self value
        on all direct children as a group. In flexbox, it controls the alignment
        of items on the cross axis. In grid layout, it controls the alignment of
        items on the block axis within their grid areas.
      </p>
    </Callout>

    <Callout semantic="info">
      Color
      <p>
        Callout content The CSS align-items property sets the align-self value
        on all direct children as a group. In flexbox, it controls the alignment
        of items on the cross axis. In grid layout, it controls the alignment of
        items on the block axis within their grid areas.
      </p>
    </Callout>

    <Callout semantic="normal">
      Color
      <p>
        Callout content The CSS align-items property sets the align-self value
        on all direct children as a group. In flexbox, it controls the alignment
        of items on the cross axis. In grid layout, it controls the alignment of
        items on the block axis within their grid areas.
      </p>
    </Callout>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </section>
</Center>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
