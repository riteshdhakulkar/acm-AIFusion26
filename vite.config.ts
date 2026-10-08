import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-exact-poster-middleware',
        configureServer(server) {
          server.middlewares.use('/api/save-poster', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({error: 'Method not allowed'}));
              return;
            }
            let body = '';
            req.on('data', (chunk) => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const {dataUrl} = JSON.parse(body);
                if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                  const targetFile = path.resolve(__dirname, 'src/assets/officialPosterData.ts');
                  const content = `// Exact uploaded official poster image data URL\nexport const OFFICIAL_POSTER_DATA_URL: string = ${JSON.stringify(dataUrl)};\n`;
                  fs.writeFileSync(targetFile, content, 'utf-8');
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ok: true}));
                } else {
                  res.statusCode = 400;
                  res.end(JSON.stringify({error: 'Invalid image dataUrl'}));
                }
              } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({error: String(err)}));
              }
            });
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
