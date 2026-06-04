"""
Convert Gurukul HEIC files to JPEG using pillow-heif.
Run: python scripts/convert-heic.py
"""
import pillow_heif, os
from PIL import Image, ImageEnhance

pillow_heif.register_heif_opener()

HEIC_FILES = [
    ("D:\\IMG_4717.HEIC",    "room-01"),
    ("D:\\IMG_4720.HEIC",    "room-02"),
    ("D:\\IMG_4721.HEIC",    "room-03"),
    ("D:\\IMG_4721 (1).HEIC","room-04"),
    ("D:\\IMG_4721 (2).HEIC","room-05"),
    ("D:\\IMG_4722.HEIC",    "room-06"),
    ("D:\\IMG_4722 (1).HEIC","room-07"),
    ("D:\\IMG_4725.HEIC",    "room-08"),
    ("D:\\IMG_4727.HEIC",    "room-09"),
    ("D:\\IMG_4729.HEIC",    "room-10"),
    ("D:\\IMG_4731.HEIC",    "room-11"),
    ("D:\\IMG_4732.HEIC",    "room-12"),
]

OUT = "D:\\Darshan\\Rentastic-Homes\\public\\properties\\gurukul"
os.makedirs(OUT, exist_ok=True)

MAX_PX = 1600

for src, name in HEIC_FILES:
    try:
        img = Image.open(src)
        img = img.convert("RGB")

        w, h = img.size
        scale = min(MAX_PX / max(w, h), 1.0)
        new_w, new_h = int(w * scale), int(h * scale)
        if scale < 1.0:
            img = img.resize((new_w, new_h), Image.LANCZOS)

        img = ImageEnhance.Brightness(img).enhance(1.06)
        img = ImageEnhance.Color(img).enhance(1.10)
        img = ImageEnhance.Sharpness(img).enhance(1.5)

        dest = os.path.join(OUT, name + ".jpg")
        img.save(dest, "JPEG", quality=84, optimize=True)
        print(f"OK  {name}.jpg  {img.size[0]}x{img.size[1]}")
    except Exception as e:
        print(f"ERR {name}: {e}")

print("\nDone.")
