<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";

  let { children } = $props();

  export const prerender = true
</script>

<svelte:head>
</svelte:head>

<Header />

{@render children()}

<Footer />
