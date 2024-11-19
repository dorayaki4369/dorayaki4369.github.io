<script lang="ts">
  import { browser } from "$app/environment";
  import DarkLight from "$lib/components/DarkLight.svelte";

  const links: { path: string; title: string; current: boolean }[] = [
    { path: "/", title: "Home", current: false },
  ];

  if (browser) {
    const url = new URL(window.location.href);
    links.forEach((link) => {
      link.current = link.path === url.pathname;
    });
  }
</script>

<div>
  <nav>
    <ul>
      {#each links as { path, title, current }}
        <li>
          <a
            href={path}
            aria-current={current}
            data-disable-underline={!current}
          >
            {title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <DarkLight />
</div>

<style lang="scss">
  @use "../styles/variable" as vars;

  div {
    display: flex;
    gap: vars.s(0);
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    gap: vars.s(-1);
    list-style: none;
  }
</style>
