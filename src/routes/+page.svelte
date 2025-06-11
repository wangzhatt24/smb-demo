<script>
  // Logic JS có thể thêm sau nếu cần gửi form qua API
</script>

<svelte:head>
  <title>CosMedConnect – Cosmetic Tourism với trải nghiệm chăm sóc toàn diện</title>
  <meta name="description" content="CosMedConnect kết nối khách hàng Úc với bác sĩ thẩm mỹ hàng đầu, bệnh viện chất lượng và dịch vụ phục hồi chăm sóc sau phẫu thuật tại Việt Nam." />
</svelte:head>

<main class="mx-auto max-w-5xl p-6 space-y-12">
  <!-- Hero Section -->
  <section class="text-center py-20 bg-gradient-to-b from-pink-100 to-white rounded-lg">
    <h1 class="text-4xl font-extrabold">CosMedConnect</h1>
    <p class="mt-4 text-xl text-gray-700">Kết nối khách hàng Úc với dịch vụ phẫu thuật thẩm mỹ chất lượng—bác sĩ, bệnh viện, phục hồi chuyên biệt.</p>
    <a href="#contact-form" class="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg">
      Liên hệ tư vấn miễn phí
    </a>
  </section>

  <!-- Features Section -->
  <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="text-center p-6 border rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold mb-2">Bác sĩ chuyên nghiệp</h2>
      <p>Hợp tác với các bác sĩ thẩm mỹ hàng đầu và bệnh viện chuẩn quốc tế.</p>
    </div>
    <div class="text-center p-6 border rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold mb-2">Dịch vụ mà bạn cần</h2>
      <p>Chọn gói phẫu thuật kèm chăm sóc hậu phẫu trọn gói và cá nhân hóa.</p>
    </div>
    <div class="text-center p-6 border rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold mb-2">Chuẩn an toàn & hỗ trợ 24/7</h2>
      <p>Hỗ trợ tư vấn, di chuyển, phiên dịch và chăm sóc chuyên nghiệp suốt hành trình.</p>
    </div>
  </section>

  <!-- Process Section -->
  <section class="space-y-8">
    <h2 class="text-3xl font-semibold text-center">Quy trình đơn giản, tin cậy</h2>
    <ol class="list-decimal list-inside space-y-4 text-gray-800">
      <li><strong>Đăng ký & tư vấn:</strong> Kết nối trực tiếp với chuyên gia.</li>
      <li><strong>Thiết kế gói:</strong> Cá nhân hóa theo nhu cầu và kế hoạch của bạn.</li>
      <li><strong>Thực hiện phẫu thuật:</strong> Tại các cơ sở đạt tiêu chuẩn quốc tế.</li>
      <li><strong>Chăm sóc sau phẫu thuật:</strong> Hỗ trợ tận nơi và theo dõi 24/7.</li>
      <li><strong>Phục hồi và theo dõi:</strong> Sau khi về nước, vẫn đảm bảo chăm sóc khi cần.</li>
    </ol>
  </section>

  <!-- Testimonials Section -->
  <section class="py-12 bg-gray-50 space-y-8">
    <h2 class="text-3xl font-semibold text-center">Nhận xét từ khách hàng</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <blockquote class="bg-white p-6 rounded-lg shadow">
        <p class="italic">“CosMedConnect chăm sóc tôi từ đầu đến cuối – rất chuyên nghiệp và an tâm.”</p>
        <footer class="mt-4 text-right font-semibold">– Sarah, Adelaide</footer>
      </blockquote>
      <blockquote class="bg-white p-6 rounded-lg shadow">
        <p class="italic">“Dịch vụ phục hồi và support 24/7 rất tuyệt vời.”</p>
        <footer class="mt-4 text-right font-semibold">– James, Sydney</footer>
      </blockquote>
    </div>
  </section>

  <!-- Contact Form -->
  <section id="contact-form" class="py-12">
    <form action="" class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">Contact</h2>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="contact[email]"
          type="email"
          placeholder="E.g. john.smith@acmecorp.com"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="first_name" class="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          id="first_name"
          name="contact[first_name]"
          type="text"
          placeholder="E.g. John"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="last_name" class="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          id="last_name"
          name="contact[last_name]"
          type="text"
          placeholder="E.g. Smith"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  </section>
</main>
