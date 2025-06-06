<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import "../app.css";

  let { children } = $props();

  export const prerender = true
</script>

<svelte:head>
</svelte:head>

<Header />

{@render children()}
