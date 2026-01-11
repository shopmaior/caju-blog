"use client";

import { useState, useEffect } from "react";
import {
  Facebook,
  Link as LinkIcon,
  MessageCircle,
  Send,
  Check,
  Share2,
} from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

export function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Wrap in setTimeout to avoid synchronous setState warning during mount
    const timeout = setTimeout(() => {
      setUrl(window.location.href);
      if (typeof navigator !== "undefined" && !!navigator.share) {
        setCanShare(true);
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${title} - ${url}`
      )}`,
      color: "hover:text-[#25D366] hover:bg-[#25D366]/10",
    },
    {
      name: "Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      color: "hover:text-[#0088cc] hover:bg-[#0088cc]/10",
    },
    {
      name: "X",
      icon: XIcon,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      color:
        "hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
        Compartilhar:
      </span>

      <div className="flex items-center gap-1">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Compartilhar no ${link.name}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-muted-foreground ${link.color}`}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}

        <button
          onClick={copyToClipboard}
          title="Copiar link"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-muted-foreground hover:bg-primary/10 hover:text-primary ${
            copied ? "text-primary bg-primary/10" : ""
          }`}
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <LinkIcon className="h-5 w-5" />
          )}
        </button>

        {canShare && (
          <button
            onClick={handleNativeShare}
            title="Mais opções de compartilhamento"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-muted-foreground hover:bg-primary/10 hover:text-primary md:hidden"
          >
            <Share2 className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
