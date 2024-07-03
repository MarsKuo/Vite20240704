// vite.config.js
import { defineConfig } from "file:///C:/Users/User/Dropbox/Course/HexSchool/%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/%E8%AA%B2%E7%A8%8B%E7%B7%B4%E7%BF%92/Vite/web-layout-training-vite/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/User/Dropbox/Course/HexSchool/%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/%E8%AA%B2%E7%A8%8B%E7%B7%B4%E7%BF%92/Vite/web-layout-training-vite/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/User/Dropbox/Course/HexSchool/%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/%E8%AA%B2%E7%A8%8B%E7%B7%B4%E7%BF%92/Vite/web-layout-training-vite/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/User/Dropbox/Course/HexSchool/%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/%E8%AA%B2%E7%A8%8B%E7%B7%B4%E7%BF%92/Vite/web-layout-training-vite/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/User/Dropbox/Course/HexSchool/%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/%E8%AA%B2%E7%A8%8B%E7%B7%B4%E7%BF%92/Vite/web-layout-training-vite/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/Vite20240704/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERyb3Bib3hcXFxcQ291cnNlXFxcXEhleFNjaG9vbFxcXFxcdTUyMDdcdTcyNDhcdTRFMEFcdThBQjJcdThBMThcdTkzMDRcXFxcXHU4QUIyXHU3QTBCXHU3REY0XHU3RkQyXFxcXFZpdGVcXFxcd2ViLWxheW91dC10cmFpbmluZy12aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERyb3Bib3hcXFxcQ291cnNlXFxcXEhleFNjaG9vbFxcXFxcdTUyMDdcdTcyNDhcdTRFMEFcdThBQjJcdThBMThcdTkzMDRcXFxcXHU4QUIyXHU3QTBCXHU3REY0XHU3RkQyXFxcXFZpdGVcXFxcd2ViLWxheW91dC10cmFpbmluZy12aXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0Ryb3Bib3gvQ291cnNlL0hleFNjaG9vbC8lRTUlODglODclRTclODklODglRTQlQjglOEElRTglQUElQjIlRTglQTglOTglRTklOEMlODQvJUU4JUFBJUIyJUU3JUE4JThCJUU3JUI3JUI0JUU3JUJGJTkyL1ZpdGUvd2ViLWxheW91dC10cmFpbmluZy12aXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XHJcblxyXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XHJcblxyXG5mdW5jdGlvbiBtb3ZlT3V0cHV0UGx1Z2luKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWxlTmFtZSBpbiBidW5kbGUpIHtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUuc2xpY2UoJ3BhZ2VzLycubGVuZ3RoKTtcclxuICAgICAgICAgIGJ1bmRsZVtmaWxlTmFtZV0uZmlsZU5hbWUgPSBuZXdGaWxlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBiYXNlIFx1NzY4NFx1NUJFQlx1NkNENVx1RkYxQVxyXG4gIC8vIGJhc2U6ICcvUmVwb3NpdG9yeSBcdTc2ODRcdTU0MERcdTdBMzEvJ1xyXG4gIGJhc2U6ICcvVml0ZTIwMjQwNzA0LycsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgbGl2ZVJlbG9hZChbJy4vbGF5b3V0LyoqLyouZWpzJywgJy4vcGFnZXMvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmh0bWwnXSksXHJcbiAgICBWaXRlRWpzUGx1Z2luKCksXHJcbiAgICBtb3ZlT3V0cHV0UGx1Z2luKCksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIFx1NTU1Rlx1NTJENSBzZXJ2ZXIgXHU2NjQyXHU5ODEwXHU4QTJEXHU5NThCXHU1NTVGXHU3Njg0XHU5ODAxXHU5NzYyXHJcbiAgICBvcGVuOiAncGFnZXMvaW5kZXguaHRtbCcsXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIGdsb2JcclxuICAgICAgICAgIC5zeW5jKCdwYWdlcy8qKi8qLmh0bWwnKVxyXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xyXG4gICAgICAgICAgICBwYXRoLnJlbGF0aXZlKCdwYWdlcycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXHJcbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc2dCLFNBQVMsb0JBQW9CO0FBQ25pQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTm9RLElBQU0sMkNBQTJDO0FBUTVVLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sZUFBZSxTQUFTLFFBQVE7QUFDcEMsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLFlBQUksU0FBUyxXQUFXLFFBQVEsR0FBRztBQUNqQyxnQkFBTSxjQUFjLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbEQsaUJBQU8sUUFBUSxFQUFFLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBRzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLFdBQVcsQ0FBQyxxQkFBcUIsb0JBQW9CLG1CQUFtQixDQUFDO0FBQUEsSUFDekUsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDN0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
