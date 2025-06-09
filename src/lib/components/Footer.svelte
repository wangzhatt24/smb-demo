<script>
  // Bạn có thể thêm liên kết mạng xã hội thực ở đây
  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'LinkedIn', url: '#', icon: '🔗' },
    { name: 'YouTube', url: '#', icon: '▶️' }
  ];
</script>

<footer class="bg-gray-900 text-white py-10 px-6 mt-12">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <!-- Thông tin liên hệ -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Liên hệ</h2>
      <p class="text-sm">
        <strong>Address:</strong> 105 – 107 Trần Văn Dư, Phường 13, Tân Bình, Hồ Chí Minh
      </p>
      <p class="text-sm mt-1">
        <strong>Phone:</strong> <a href="tel:+842873013388" class="underline">028 7301 3388</a><br />
        <strong>Mail:</strong> <a href="mailto:info@smbplus.vn" class="underline">info@smbplus.vn</a>
      </p>
    </div>

    <!-- Dịch vụ -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Dịch vụ</h2>
      <ul class="space-y-1 text-sm">
        <li>Software Engineering</li>
        <li>Technology Consulting</li>
        <li>Testing service</li>
      </ul>
    </div>

    <!-- Giải pháp -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Giải pháp</h2>
      <ul class="space-y-1 text-sm">
        <li>HRM+</li>
        <li>Freshworks</li>
        <li>Case Studies</li>
        <li>Tin tức old</li>
        <li>Liên hệ</li>
      </ul>
    </div>

    <!-- Mạng xã hội -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Follow Us</h2>
      <div class="flex space-x-4 mt-2">
        {#each socialLinks as link}
          <a href={link.url} target="_blank" aria-label={link.name} class="hover:text-blue-400 text-xl">
            {link.icon}
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-10 text-center text-xs text-gray-400">
    Copyright © 2022 SMB+
  </div>
</footer>
