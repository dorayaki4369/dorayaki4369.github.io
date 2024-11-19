<script>
  import Footer from "$routes/Footer.svelte";
  import Header from "./Header.svelte";
  import "../app.scss";
</script>

<div>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>
