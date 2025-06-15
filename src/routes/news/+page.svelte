<script>
  const newsList = [
    {
      title: "Dấu tích xanh WhatsApp: Cách xác minh tài khoản WhatsApp Business",
      date: "August 28, 2023",
      excerpt: "Bạn muốn có được dấu tích xanh WhatsApp đáng thèm muốn? Đọc bài viết này để tìm hiểu cách xác minh tài khoản WhatsApp Business."
    },
    {
      title: "Chatbot là công cụ tự động hóa giúp giảm chi phí tương tác với khách hàng",
      date: "April 24, 2023",
      excerpt: "Chatbot đang thay đổi cách doanh nghiệp tương tác với khách hàng, giúp tiết kiệm thời gian và nâng cao hiệu quả."
    },
    {
      title: "Freshchat – Giải pháp tuyệt vời cho dịch vụ khách hàng",
      date: "April 20, 2023",
      excerpt: "Freshchat mang lại trải nghiệm trò chuyện mượt mà, hỗ trợ đa nền tảng, thích hợp cho mọi quy mô doanh nghiệp."
    },
    {
      title: "Quản lý hỗ trợ IT dễ dàng hơn với Freshservice",
      date: "April 10, 2023",
      excerpt: "Freshservice là công cụ mạnh mẽ giúp doanh nghiệp đơn giản hóa việc quản lý dịch vụ IT với giao diện trực quan."
    },
    {
      title: "Sales Conversations – Cải thiện quá trình bán hàng",
      date: "March 23, 2023",
      excerpt: "Sales Conversations giúp đội ngũ bán hàng tạo cuộc trò chuyện giá trị với khách hàng tiềm năng một cách nhất quán."
    },
    {
      title: "Landing Page trong Freshdesk Omnichannel",
      date: "March 23, 2023",
      excerpt: "Landing Page là công cụ không thể thiếu để nâng cao tỷ lệ chuyển đổi trong quá trình chăm sóc khách hàng."
    },
    {
      title: "Freshdesk Omnichannel – Tăng tốc quy trình CSKH",
      date: "March 22, 2023",
      excerpt: "Một nền tảng đa kênh giúp bạn cá nhân hóa trải nghiệm và giải quyết vấn đề khách hàng nhanh chóng."
    },
    {
      title: "Dự báo doanh số với Freshsales Suite",
      date: "March 22, 2023",
      excerpt: "Tính năng báo cáo & dự báo giúp doanh nghiệp đưa ra quyết định tốt hơn, nhanh hơn trong hoạt động bán hàng."
    },
    {
      title: "Sales Sequences – Công cụ nuôi dưỡng khách hàng tự động",
      date: "March 21, 2023",
      excerpt: "Tự động hóa quá trình chăm sóc khách hàng giúp tăng tỷ lệ chuyển đổi và giảm thời gian xử lý thủ công."
    },
    {
      title: "Freshdesk Omnichannel – Trợ thủ đắc lực cho đội ngũ CSKH",
      date: "March 20, 2023",
      excerpt: "Freshdesk Omnichannel giúp tích hợp tất cả các kênh giao tiếp và tăng năng suất làm việc của nhóm hỗ trợ."
    },
    {
      title: "Freshsales CRM – Nâng tầm quản lý mối quan hệ khách hàng",
      date: "March 17, 2023",
      excerpt: "Freshsales giúp bạn theo dõi toàn bộ hành trình khách hàng, từ khách tiềm năng đến khách hàng trung thành."
    },
    {
      title: "Revolutionize Sales & Support with Freshworks",
      date: "March 17, 2023",
      excerpt: "Sự kiện hợp tác giữa Freshworks và SMB+ đã mở ra hướng đi mới trong tự động hóa bán hàng và chăm sóc khách hàng."
    }
  ];
</script>

<svelte:head>
  <title>Tin tức | SMB+</title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 py-10">
  <h1 class="text-4xl font-bold text-gray-800 mb-6">📰 Tin tức mới nhất</h1>

  <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
    {#each newsList as news}
      <article class="rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow bg-white p-6">
        <div class="mb-3 text-sm text-gray-500">{news.date}</div>
        <h2 class="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
          {news.title}
        </h2>
        <p class="text-gray-700 text-sm leading-relaxed">{news.excerpt}</p>
      </article>
    {/each}
  </div>
</section>
