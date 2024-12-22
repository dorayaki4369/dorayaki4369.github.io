// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { SvelteComponent } from "svelte";

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}

    interface MdsvexFile {
      default: SvelteComponent;
      metadata: Record<string, string>;
    }

    type MdsvexResolver = () => Promise<MdsvexFile>;

    interface BlogPost {
      slug: string;
      title: string;
      date: string;
      published?: boolean;
    }
  }
}

export {};
