<script lang="ts">
  import { getColorScheme } from "$lib/stores/color-scheme.svelte.js";
  import Icon               from "$lib/components/Icon.svelte";
  import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

  const scheme = getColorScheme();

  let icon = $derived(scheme.value === "light" ? mdiWeatherSunny : mdiWeatherNight);
</script>

<button onclick={scheme.toggle} aria-label="Toggle light/dark theme">
  <Icon path={icon} />
</button>
