import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: "404.html",   // 👈 Đảm bảo route client hoạt động khi reload
      pages: "build",
      assets: "build",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: "",                 // 👈 Rất quan trọng nếu dùng custom domain
    }
  },
};

export default config;
