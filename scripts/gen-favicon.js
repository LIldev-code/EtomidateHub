const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, '..', 'public', 'favicon.svg'));

async function generate() {
  // Generate 32x32 PNG icon
  await sharp(svg).resize(32, 32).png().toFile(path.join(__dirname, '..', 'src', 'app', 'icon.png'));
  console.log('Created src/app/icon.png (32x32)');

  // Generate 180x180 apple-touch-icon
  await sharp(svg).resize(180, 180).png().toFile(path.join(__dirname, '..', 'src', 'app', 'apple-icon.png'));
  console.log('Created src/app/apple-icon.png (180x180)');
}

generate().catch(console.error);
