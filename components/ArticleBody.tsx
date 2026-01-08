"use client";

import { useState } from "react";

type FontSize = "sm" | "base" | "lg" | "xl";

function getInitialFontSize(): FontSize {
  if (typeof window === "undefined") return "base";

  const saved = localStorage.getItem("blog-font-size");
  if (saved === "sm" || saved === "base" || saved === "lg" || saved === "xl") {
    return saved as FontSize;
  }

  return "base";
}

export default function ArticleBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSize] = useState<FontSize>(getInitialFontSize);

  const changeSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem("blog-font-size", size);
  };

  const getSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "prose-sm";
      case "base":
        return "prose";
      case "lg":
        return "prose-lg";
      case "xl":
        return "prose-xl";
    }
  };

  const getLabel = (size: FontSize) => {
    switch (size) {
      case "sm":
        return "Tamanho da fonte: Pequeno";
      case "base":
        return "Tamanho da fonte: Padrão";
      case "lg":
        return "Tamanho da fonte: Grande";
      case "xl":
        return "Tamanho da fonte: Muito Grande";
    }
  };

  return (
    <div className="relative">
      {/* Controls */}
      <div className="flex justify-end mb-6 sticky top-20 z-10">
        <div className="rounded-full border bg-background/80 backdrop-blur shadow px-2 py-1 flex gap-1">
          {(["sm", "base", "lg", "xl"] as FontSize[]).map((size) => (
            <button
              key={size}
              onClick={() => changeSize(size)}
              aria-label={getLabel(size)}
              className={`w-8 h-8 rounded-full text-sm font-medium ${
                fontSize === size ? "bg-primary text-white" : "hover:bg-muted"
              }`}
            >
              A
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <article
        className={`prose max-w-none transition-all duration-300 ${getSizeClass()}`}
      >
        {children}
      </article>
    </div>
  );
}
