import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

async function optimizeImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await optimizeImages(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      
      console.log(`Converting ${fullPath} to webp...`);
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        console.log(`Deleting original ${fullPath}...`);
        await fs.unlink(fullPath);
      } catch (err) {
        console.error(`Failed to process ${fullPath}:`, err);
      }
    }
  }
}

const targetDir = path.resolve('public/images');
console.log(`Starting image optimization in ${targetDir}...`);
optimizeImages(targetDir).then(() => {
  console.log('Optimization complete.');
}).catch(err => {
  console.error('Optimization failed:', err);
});
