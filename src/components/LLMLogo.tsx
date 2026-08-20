"use client";
import { useState } from "react";

interface LLMLogoProps {
  domain: string;
  name: string;
  size?: number;
}

export default function LLMLogo({ domain, name, size = 32 }: LLMLogoProps) {
  const [imgSrc, setImgSrc] = useState(`https://www.google.com/s2/favicons?domain=${domain}&sz=${size * 2}`);
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);

  const fallbackSources = [
    `https://logos.hunter.io/${domain}`,
    `https://icons.duckduckgo.com/ip3/${domain}.png`,
  ];

  const handleError = () => {
    if (attempt < fallbackSources.length) {
      setAttempt(attempt + 1);
      if (attempt + 1 < fallbackSources.length) {
        setImgSrc(fallbackSources[attempt + 1]);
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className="bg-gray-900 rounded flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <span className="text-[9px] font-bold text-white leading-none">{name[0]}</span>
      </div>
    );
  }

  return (
    <div
      className="bg-gray-100 rounded flex items-center justify-center shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={imgSrc}
        alt={`${name} logo`}
        className="w-full h-full object-contain p-0.5"
        onError={handleError}
      />
    </div>
  );
}
