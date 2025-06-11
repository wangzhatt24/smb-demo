<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";

  let { children } = $props();

  afterNavigate(() => {
    const existing = document.querySelector(
      'script[src*="fw-cdn.com/13212284/5368583.js"]'
    );
    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = "//fw-cdn.com/13212284/5368583.js";
    script.setAttribute("chat", "true");
    script.async = true;
    document.body.appendChild(script);
  });
</script>

<svelte:head></svelte:head>

<Header />

{@render children()}

<Footer />
