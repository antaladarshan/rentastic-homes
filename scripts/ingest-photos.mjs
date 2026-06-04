/**
 * Converts and optimises all raw property photos from D:\ into
 * public/properties/{satellite,ansh,gurukul}/.
 * Run once: node --input-type=module < scripts/ingest-photos.mjs
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';

const OUT = 'D:\\Darshan\\Rentastic-Homes\\public\\properties';

// Create output folders
for (const d of ['satellite', 'ansh', 'gurukul']) {
  mkdirSync(`${OUT}\\${d}`, { recursive: true });
}

/** Sharp cleanup pipeline — rotate, resize, enhance, compress */
async function process(src, dest, opts = {}) {
  const {
    width = 1600,
    brightness = 1.06,
    saturation = 1.1,
    sharpenSigma = 0.9,
    quality = 82,
  } = opts;

  try {
    await sharp(src)
      .rotate()                                               // apply EXIF orientation
      .resize({ width, withoutEnlargement: true })            // cap longest edge
      .normalise({ lower: 1, upper: 99 })                    // auto-levels (gentle)
      .modulate({ brightness, saturation })                   // warm/brighten
      .sharpen({ sigma: sharpenSigma })                       // mild sharpening
      .jpeg({ quality, mozjpeg: true })
      .toFile(dest);
    console.log('OK  ' + dest.split('\\').pop());
  } catch (e) {
    console.error('ERR ' + dest.split('\\').pop() + ': ' + e.message);
  }
}

// ─── SATELLITE (12 source files) ────────────────────────────────────────────
const SAT_SRC = 'D:\\WhatsApp Image 2026-06-04 at 4.19';
const SAT_OUT = OUT + '\\satellite';

// Balcony / 4-sharing-balcony hero
await process(`${SAT_SRC}.04 PM.jpeg`,      `${SAT_OUT}\\balcony-01.jpg`);
// 3-sharing rooms
await process(`${SAT_SRC}.04 PM (1).jpeg`,  `${SAT_OUT}\\3-sharing-01.jpg`);
await process(`${SAT_SRC}.04 PM (2).jpeg`,  `${SAT_OUT}\\3-sharing-02.jpg`);
// 4-sharing rooms
await process(`${SAT_SRC}.03 PM.jpeg`,      `${SAT_OUT}\\4-sharing-01.jpg`);
await process(`${SAT_SRC}.03 PM (1).jpeg`,  `${SAT_OUT}\\4-sharing-02.jpg`);
await process(`${SAT_SRC}.03 PM (2).jpeg`,  `${SAT_OUT}\\4-sharing-03.jpg`);
await process(`${SAT_SRC}.02 PM.jpeg`,      `${SAT_OUT}\\4-sharing-04.jpg`);
// Kitchen / hall / common areas
await process(`${SAT_SRC}.06 PM.jpeg`,      `${SAT_OUT}\\kitchen-01.jpg`);
await process(`${SAT_SRC}.05 PM.jpeg`,      `${SAT_OUT}\\common-01.jpg`);
await process(`${SAT_SRC}.05 PM (1).jpeg`,  `${SAT_OUT}\\common-02.jpg`);
await process(`${SAT_SRC}.05 PM (2).jpeg`,  `${SAT_OUT}\\common-03.jpg`);
await process(`${SAT_SRC}.05 PM (3).jpeg`,  `${SAT_OUT}\\common-04.jpg`);

// ─── ANSH (VideoCapture video frames — common areas / lifestyle) ─────────────
const ANSH_OUT = OUT + '\\ansh';
const VC = 'D:\\VideoCapture_20250516-';
// Process all 11 video captures (portrait 9:16 — brighten more, cap at 1200px wide)
const vcFiles = [
  '221847','221936','221959','222051','222109',
  '222159','222214','222319','222351','222359','222409',
];
for (let i = 0; i < vcFiles.length; i++) {
  await process(
    `${VC}${vcFiles[i]}.jpg.jpeg`,
    `${ANSH_OUT}\\vc-${String(i+1).padStart(2,'0')}.jpg`,
    { width: 1200, brightness: 1.1, saturation: 1.12, sharpenSigma: 1.0 },
  );
}

// WhatsApp 2025-07-12 room shots
const wpFiles = [
  '09.46.15_ac59a734','09.46.16_644fc8e9','09.46.17_15d22ffa',
  '09.46.18_cf7e4b9c','09.46.18_d66f0852','09.46.20_6697d9e3',
  '09.46.21_41889618','09.46.23_b404ed4e','09.46.26_b6987103',
];
for (let i = 0; i < wpFiles.length; i++) {
  await process(
    `D:\\WhatsApp Image 2025-07-12 at ${wpFiles[i]}.jpg.jpeg`,
    `${ANSH_OUT}\\wp-${String(i+1).padStart(2,'0')}.jpg`,
  );
}

// ─── GURUKUL (12 HEIC rooms + 5 JPG lifestyle) ───────────────────────────────
const GK_OUT = OUT + '\\gurukul';
const heicFiles = [
  { src: 'D:\\IMG_4717.HEIC',      dest: 'room-01' },
  { src: 'D:\\IMG_4720.HEIC',      dest: 'room-02' },
  { src: 'D:\\IMG_4721.HEIC',      dest: 'room-03' },
  { src: 'D:\\IMG_4721 (1).HEIC',  dest: 'room-04' },
  { src: 'D:\\IMG_4721 (2).HEIC',  dest: 'room-05' },
  { src: 'D:\\IMG_4722.HEIC',      dest: 'room-06' },
  { src: 'D:\\IMG_4722 (1).HEIC',  dest: 'room-07' },
  { src: 'D:\\IMG_4725.HEIC',      dest: 'room-08' },
  { src: 'D:\\IMG_4727.HEIC',      dest: 'room-09' },
  { src: 'D:\\IMG_4729.HEIC',      dest: 'room-10' },
  { src: 'D:\\IMG_4731.HEIC',      dest: 'room-11' },
  { src: 'D:\\IMG_4732.HEIC',      dest: 'room-12' },
];
for (const f of heicFiles) {
  await process(f.src, `${GK_OUT}\\${f.dest}.jpg`);
}

// JPG lifestyle shots — already smaller/compressed, use gentler settings
const jpgFiles = [
  { src: 'D:\\IMG_4783.JPG.jpeg',  dest: 'lifestyle-01' },
  { src: 'D:\\IMG_4784.JPG.jpeg',  dest: 'lifestyle-02' },
  { src: 'D:\\IMG_4786.JPG.jpeg',  dest: 'lifestyle-03' },
  { src: 'D:\\IMG_4787.JPG.jpeg',  dest: 'lifestyle-04' },
  { src: 'D:\\IMG_4788.JPG.jpeg',  dest: 'lifestyle-05' },
];
for (const f of jpgFiles) {
  await process(f.src, `${GK_OUT}\\${f.dest}.jpg`, {
    width: 1600, brightness: 1.02, saturation: 1.05, sharpenSigma: 0.6, quality: 85,
  });
}

console.log('\nDone. Check public/properties/');
