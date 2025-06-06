<script>
  let isOpen = $state(false);
</script>

<header class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo / Thương hiệu -->
      <div class="flex-shrink-0">
        <a href="/" class="text-4xl font-bold text-gray-800">
          SMB DEMO
        </a>
      </div>

      <!-- Menu desktop -->
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
        <a href="/about" class="text-gray-700 hover:text-blue-500">About</a>
        <a href="/blog" class="text-gray-700 hover:text-blue-500">Blog</a>
        <a href="/contact" class="text-gray-700 hover:text-blue-500">Contact</a>
      </nav>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button aria-label="mobile-menu-button" onclick={() => (isOpen = !isOpen)} class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="{isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isOpen}
    <div class="md:hidden bg-white shadow">
      <nav class="px-4 pt-2 pb-4 space-y-1">
        <a href="/" class="block text-gray-700 hover:text-blue-500">Home</a>
        <a href="/about" class="block text-gray-700 hover:text-blue-500">About</a>
        <a href="/blog" class="block text-gray-700 hover:text-blue-500">Blog</a>
        <a href="/contact" class="block text-gray-700 hover:text-blue-500">Contact</a>
      </nav>
    </div>
  {/if}
</header>
