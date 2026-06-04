import sharp from 'sharp';
import { readdir } from 'fs/promises';

const groups = [
  { label: 'SATELLITE', files: [
    'D:\\WhatsApp Image 2026-06-04 at 4.19.04 PM.jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.04 PM (1).jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.04 PM (2).jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.03 PM.jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.03 PM (1).jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.03 PM (2).jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.02 PM.jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.06 PM.jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.05 PM.jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.05 PM (1).jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.05 PM (2).jpeg',
    'D:\\WhatsApp Image 2026-06-04 at 4.19.05 PM (3).jpeg',
  ]},
  { label: 'ANSH VideoCapture', files: [
    'D:\\VideoCapture_20250516-221847.jpg.jpeg',
    'D:\\VideoCapture_20250516-221936.jpg.jpeg',
    'D:\\VideoCapture_20250516-221959.jpg.jpeg',
    'D:\\VideoCapture_20250516-222051.jpg.jpeg',
    'D:\\VideoCapture_20250516-222109.jpg.jpeg',
    'D:\\VideoCapture_20250516-222159.jpg.jpeg',
    'D:\\VideoCapture_20250516-222214.jpg.jpeg',
    'D:\\VideoCapture_20250516-222319.jpg.jpeg',
    'D:\\VideoCapture_20250516-222351.jpg.jpeg',
    'D:\\VideoCapture_20250516-222359.jpg.jpeg',
    'D:\\VideoCapture_20250516-222409.jpg.jpeg',
  ]},
  { label: 'ANSH WhatsApp 2025', files: [
    'D:\\WhatsApp Image 2025-07-12 at 09.46.15_ac59a734.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.16_644fc8e9.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.17_15d22ffa.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.18_cf7e4b9c.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.18_d66f0852.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.20_6697d9e3.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.21_41889618.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.23_b404ed4e.jpg.jpeg',
    'D:\\WhatsApp Image 2025-07-12 at 09.46.26_b6987103.jpg.jpeg',
  ]},
  { label: 'GURUKUL HEIC', files: [
    'D:\\IMG_4717.HEIC',
    'D:\\IMG_4720.HEIC',
    'D:\\IMG_4721.HEIC',
    'D:\\IMG_4721 (1).HEIC',
    'D:\\IMG_4721 (2).HEIC',
    'D:\\IMG_4722.HEIC',
    'D:\\IMG_4722 (1).HEIC',
    'D:\\IMG_4725.HEIC',
    'D:\\IMG_4727.HEIC',
    'D:\\IMG_4729.HEIC',
    'D:\\IMG_4731.HEIC',
    'D:\\IMG_4732.HEIC',
  ]},
  { label: 'GURUKUL JPG', files: [
    'D:\\IMG_4783.JPG.jpeg',
    'D:\\IMG_4784.JPG.jpeg',
    'D:\\IMG_4786.JPG.jpeg',
    'D:\\IMG_4787.JPG.jpeg',
    'D:\\IMG_4788.JPG.jpeg',
  ]},
];

for (const g of groups) {
  console.log('\n=== ' + g.label + ' ===');
  for (const f of g.files) {
    try {
      const m = await sharp(f).metadata();
      const orient = m.orientation > 1 ? ' [rot:' + m.orientation + ']' : '';
      console.log('  ' + f.split('\\').pop() + '  ' + m.width + 'x' + m.height + orient);
    } catch(e) {
      console.log('  ERR ' + f.split('\\').pop() + ': ' + e.message);
    }
  }
}
