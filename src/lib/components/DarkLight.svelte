<script lang="ts">
  import { browser } from "$app/environment";
  import Icon from "$lib/components/Icon.svelte";
  import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

  let scheme = $state.raw<"light" | "dark">("light");
  $effect(() => {
    document.documentElement.setAttribute("data-color-scheme", scheme);
  });

  let icon = $derived(scheme === "light" ? mdiWeatherSunny : mdiWeatherNight);

  function toggleColorScheme() {
    scheme = scheme === "light" ? "dark" : "light";
  }

  if (browser) {
    function setOSlightDark(osLight: { matches: boolean }) {
      scheme = osLight.matches ? "light" : "dark";
    }

    const osLight = window.matchMedia("(prefers-color-scheme: light)");
    osLight.addEventListener("change", setOSlightDark);

    setOSlightDark(osLight);
  }
</script>

<button onclick={toggleColorScheme}>
  <Icon path={icon} />
</button>
