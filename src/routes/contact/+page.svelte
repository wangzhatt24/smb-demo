<script>
  let fullName = '';
  let company = '';
  let email = '';
  let phone = '';
  let message = '';

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi form ở đây (ví dụ: fetch POST đến API)
    console.log({ fullName, company, email, phone, message });
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
  };
</script>

<svelte:head>
  <title>SMB DEMO | Contact</title>
  <meta name="description" content="Liên hệ SMB+ để nhận tư vấn và hỗ trợ chuyên nghiệp về phát triển phần mềm." />
</svelte:head>

<main class="max-w-3xl mx-auto px-4 py-12 space-y-6">
  <h1 class="text-3xl font-bold text-center mb-6">Liên hệ</h1>

  <section class="space-y-4 text-justify">
    <p class="text-lg font-medium">Bạn cần hỗ trợ?</p>
    <p>
      Nhóm đảm bảo chất lượng có thể xem xét nhu cầu dự án của bạn, hiểu chi tiết và kiểm tra đúng công việc tránh lãng phí thời gian của bạn.
    </p>
    <p>
      Một nhóm mà ở đó để hỗ trợ bạn trong quá trình phát triển ban đầu của dự án và trong nhiều năm sau đó góp phần vào thành công của bạn.
    </p>
    <p class="font-semibold">Hãy liên hệ ngay với SMB+</p>
    <ul class="space-y-1">
      <li><strong>Email:</strong> <a class="text-blue-600 underline" href="mailto:info@smbplus.vn">info@smbplus.vn</a></li>
      <li><strong>Phone:</strong> <a class="text-blue-600" href="tel:+842873013388">028 7301 3388</a></li>
      <li><strong>Head Office:</strong> 105 – 107 Trần Văn Dư, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh, Việt Nam</li>
    </ul>
  </section>

  <form on:submit|preventDefault={handleSubmit} class="space-y-6 bg-gray-50 p-6 rounded-xl shadow">
    <div>
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="block font-medium mb-1">Họ và tên *</label>
      <input bind:value={fullName} required class="w-full p-2 border rounded" placeholder="Họ tên..." />
    </div>

    <div>
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="block font-medium mb-1">Công ty *</label>
      <input bind:value={company} required class="w-full p-2 border rounded" placeholder="Công ty..." />
    </div>

    <div>
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="block font-medium mb-1">Email *</label>
      <input type="email" bind:value={email} required class="w-full p-2 border rounded" placeholder="name@company.com" />
    </div>

    <div>
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="block font-medium mb-1">Điện thoại</label>
      <input type="tel" bind:value={phone} class="w-full p-2 border rounded" placeholder="Số điện thoại..." />
    </div>

    <div>
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label aria-controls="contact" class="block font-medium mb-1">Bạn cần hỗ trợ gì? *</label>
      <textarea bind:value={message} required rows="4" class="w-full p-2 border rounded" placeholder="Nội dung..."></textarea>
    </div>

    <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
      Gửi liên hệ
    </button>
  </form>

  <section class="bg-white p-6 text-center mt-12 rounded-xl border">
    <h2 class="text-xl font-semibold mb-2">Bắt đầu ngay</h2>
    <p class="mb-4">
      Khi nói đến việc quản lý CNTT cho doanh nghiệp của bạn, bạn cần một chuyên gia.
      Hãy để chúng tôi cho bạn thấy hỗ trợ CNTT đáp ứng, đáng tin cậy và có trách nhiệm trông như thế nào trên thế giới.
    </p>
    <a href="#book-demo" class="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
      Book a demo
    </a>
  </section>
</main>
