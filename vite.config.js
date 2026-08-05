import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = import.meta.dirname;

function copyProjectDownloads() {
  const downloads = [
    'Brief_SEEED STUDIO VISUAL IDENTITY GUIDE.pdf',
    '稿定AI生图分享.pdf',
    '视频工作流_即梦Seedance 2.0 AI.pdf',
    '详情页生成_AI生图.pdf',
    'PDF-Lossless-Studio-Portable-v1.1.zip'
  ];

  return {
    name: 'copy-project-downloads',
    async closeBundle() {
      const outputDirectory = resolve(root, 'dist/projects');
      await mkdir(outputDirectory, { recursive: true });
      await Promise.all(downloads.map(async (filename) => {
        try {
          await copyFile(
            resolve(root, 'projects', filename),
            resolve(outputDirectory, filename)
          );
        } catch (err) {
          // Skip if missing
        }
      }));
    }
  };
}

export default defineConfig({
  // The public site is exposed by the reverse proxy at /design-system/.
  base: '/design-system/',
  plugins: [copyProjectDownloads()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        'ai-detail-page': resolve(root, 'projects/ai-detail-page.html'),
        'ai-video-workflow': resolve(root, 'projects/ai-video-workflow.html'),
        'chaihuo-maker-space': resolve(root, 'projects/chaihuo-maker-space.html'),
        'gaoding-ai-image': resolve(root, 'projects/gaoding-ai-image.html'),
        'hq-showroom': resolve(root, 'projects/hq-showroom.html'),
        'mf-brand-upgrade': resolve(root, 'projects/mf-brand-upgrade.html'),
        'pdf-compressor': resolve(root, 'projects/pdf-compressor.html'),
        'product-video': resolve(root, 'projects/product-video.html'),
        'souvenir-collection': resolve(root, 'projects/souvenir-collection.html')
      }
    }
  }
});
