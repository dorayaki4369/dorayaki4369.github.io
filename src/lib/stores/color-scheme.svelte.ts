import { browser } from "$app/environment";

type ColorScheme = "light" | "dark" | null;

let scheme = $state.raw<ColorScheme>(null);

if (browser && scheme === null) {
  scheme = localStorage.getItem("color-scheme") as ColorScheme;

  const osLight = window.matchMedia("(prefers-color-scheme: light)");

  if (scheme === null) {
    scheme = (osLight.matches ? "light" : "dark");
  }

  osLight.addEventListener("change", () => {
    scheme = (osLight.matches ? "light" : "dark");
  });
}

export function getColorScheme() {
  $effect(() => {
    const item = scheme ?? 'light';

    localStorage.setItem("color-scheme", item);
    document.documentElement.setAttribute("data-color-scheme", item);
  });

  return {
    get value() {
      return scheme;
    },
    set value(value: ColorScheme) {
      scheme = value;
    },
    toggle() {
      scheme = scheme === "light" ? "dark" : "light";
    }
  };
}