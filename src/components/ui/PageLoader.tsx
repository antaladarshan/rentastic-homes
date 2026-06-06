"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_DISPLAY = 1800;

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone]     = useState(false);

  useEffect(() => {
    const start = Date.now();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finish = () => {
      const elapsed = Date.now() - start;
      const delay   = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = prevOverflow;
        setTimeout(() => setGone(true), 700);
      }, delay);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (gone) return null;

  return (
    <div id="page-loader" className={hidden ? "is-hidden" : ""} aria-hidden="true">
      <div className="pl-mote" />
      <div className="pl-mote" />
      <div className="pl-mote" />
      <div className="pl-mote" />
      <div className="pl-mote" />
      <div className="pl-mote" />
      <div className="pl-mote" />

      <div className="pl-logo-wrap">
        <div className="pl-logo-shadow" />
        <Image
          src="/navbar-logo.png"
          alt="Rentastic Homes"
          fill
          className="pl-logo-img"
          priority
          unoptimized
        />
      </div>

      <div className="pl-loader">
        <div className="pl-dots">
          <span className="pl-dot" />
          <span className="pl-dot" />
          <span className="pl-dot" />
        </div>
        <div className="pl-loader-text">
          Preparing your stay
          <span className="pl-blink">.</span>
          <span className="pl-blink">.</span>
          <span className="pl-blink">.</span>
        </div>
      </div>
    </div>
  );
}
