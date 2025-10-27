<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";

  let { children } = $props();

  afterNavigate(() => {
    // const existing = document.querySelector(
    //   'script[src*="in.fw-cdn.com/32598945/1442336.js"]'
    // );
    // if (existing) {
    //   existing.remove();
    // }


    // Chat widget
    const script = document.createElement("script");
    script.src = "//fw-cdn.com/10741366/3537314.js";
    script.setAttribute("chat", "true");
    script.async = true;
    document.body.appendChild(script);

    
  });
</script>

<svelte:head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</svelte:head>

<Header />

{@render children()}

<Footer />
