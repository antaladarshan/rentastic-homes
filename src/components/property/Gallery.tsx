"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const main = images[0];
  const thumbs = images.slice(1, 5);

  const prev = () => setLightbox((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setLightbox((i) => (i! < images.length - 1 ? i! + 1 : 0));

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm h-[320px] md:h-[500px] rounded-xl overflow-hidden group">
        {/* Main image */}
        <div className="relative h-full w-full cursor-pointer" onClick={() => setLightbox(0)}>
          <Image src={main.src} alt={main.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>

        {/* 2×2 thumbs — desktop only */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-sm h-full">
          {thumbs.map((img, i) => (
            <div key={i} className={`relative w-full h-full overflow-hidden cursor-pointer ${i === 1 ? "rounded-tr-xl" : ""} ${i === 3 ? "rounded-br-xl" : ""}`} onClick={() => setLightbox(i + 1)}>
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
              {/* "See All Photos" overlay on last thumb */}
              {i === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors rounded-br-xl">
                  <button className="bg-white text-on-surface px-md py-sm rounded-full text-label-caps flex items-center gap-xs shadow-sm hover:bg-surface-container-low transition-colors">
                    <Images size={16} /> See All Photos
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile "All Photos" button */}
        <div className="absolute bottom-4 right-4 md:hidden">
          <button onClick={() => setLightbox(0)} className="bg-white/90 backdrop-blur-sm text-on-surface px-md py-sm rounded-full text-label-caps flex items-center gap-xs shadow-sm">
            <Images size={14} /> All Photos
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft size={32} />
          </button>
          <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[lightbox].src} alt={images[lightbox].alt} fill className="object-contain" sizes="90vw" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <ChevronRight size={32} />
          </button>
          <span className="absolute bottom-4 text-white/60 text-label-caps">{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
