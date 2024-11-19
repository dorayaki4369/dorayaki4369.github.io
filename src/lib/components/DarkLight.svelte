<script lang="ts">
  import { browser } from "$app/environment";

  function setOSlightDark(osLight: { matches: boolean }) {
    if (osLight.matches) {
      document.documentElement.setAttribute("data-color-scheme", "light");
      return;
    }

    document.documentElement.setAttribute("data-color-scheme", "dark");
  }

  if (browser) {
    const osLight = window.matchMedia("(prefers-color-scheme: light)");
    osLight.addEventListener("change", setOSlightDark);

    setOSlightDark(osLight);
  }

  function toggleColorScheme() {
    const current = document.documentElement.getAttribute("data-color-scheme");
    const next = current === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-color-scheme", next);
  }
</script>

<button on:click={toggleColorScheme}> Toggle </button>
