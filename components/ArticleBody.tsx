"use client";

import { useState, useEffect } from "react";

type FontSize = "sm" | "base" | "lg" | "xl";

export default function ArticleBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSize] = useState<FontSize>("base");

  // Optional: Persist preference
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saved = localStorage.getItem("blog-font-size") as any;
    if (saved && ["sm", "base", "lg", "xl"].includes(saved)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFontSize(saved);
    }
  }, []);

  const changeSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem("blog-font-size", size);
  };

  const getSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "prose-base";
      case "base":
        return "prose-lg"; // Default to slightly larger for easier reading
      case "lg":
        return "prose-xl";
      case "xl":
        return "prose-2xl";
      default:
        return "prose-lg";
    }
  };

  return (
    <div className="relative">
      {/* Font Controls - Sticky or Floating */}
      <div className="flex justify-end mb-4 sticky top-20 z-10 pointer-events-none">
        <div className="bg-background/80 backdrop-blur shadow-md border border-border/50 rounded-full p-1 flex items-center gap-1 pointer-events-auto transition-opacity hover:opacity-100 opacity-50">
          <button
            onClick={() => changeSize("sm")}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-colors ${
              fontSize === "sm"
                ? "bg-primary text-white"
                : "hover:bg-gray-100 dark:hover:bg-white/10"
            }`}
            title="Texto Pequeno"
          >
            A-
          </button>
          <button
            onClick={() => changeSize("base")}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${
              fontSize === "base"
                ? "bg-primary text-white"
                : "hover:bg-gray-100 dark:hover:bg-white/10"
            }`}
            title="Texto Normal"
          >
            A
          </button>
          <button
            onClick={() => changeSize("lg")}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-base font-bold transition-colors ${
              fontSize === "lg"
                ? "bg-primary text-white"
                : "hover:bg-gray-100 dark:hover:bg-white/10"
            }`}
            title="Texto Grande"
          >
            A+
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div
        className={`prose dark:prose-invert max-w-none transition-all duration-300 ${getSizeClass()}
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
          prose-p:leading-relaxed prose-p:text-muted-foreground
          prose-strong:text-foreground prose-strong:font-bold
          prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-6
          prose-li:text-muted-foreground prose-li:marker:text-primary/60
          prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-border/50 prose-img:w-full prose-img:object-cover
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl
       `}
      >
        {children}
      </div>
    </div>
  );
}
