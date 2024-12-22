<script lang="ts">
  import { browser } from "$app/environment";
  import { afterNavigate } from "$app/navigation";
  import DarkLight from "$lib/components/DarkLight.svelte";

  let links: { path: string; title: string; current: boolean }[] = [
    { path: "/", title: "Home", current: false },
    { path: "/blog", title: "Blog", current: false },
  ];

  function setLinkCurrent() {
    if (browser) {
      const url = new URL(window.location.href);
      links = links.map((link) => {
        if (link.path === "/blog") {
          link.current = url.pathname.startsWith(link.path);
        } else {
          link.current = link.path === url.pathname;
        }
        return link;
      });
    }
  }

  afterNavigate(() => setLinkCurrent());
</script>

<div>
  <nav>
    <ul>
      {#each links as { path, title, current }}
        <li>
          <a
            href={path}
            aria-current={current}
            data-animate-underline={!current}
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
