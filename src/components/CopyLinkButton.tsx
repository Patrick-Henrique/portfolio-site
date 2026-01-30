"use client";

import { useState } from "react";

export default function CopyLinkButton() {
  const [label, setLabel] = useState("Copiar link");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLabel("Copiado!");
      setTimeout(() => setLabel("Copiar link"), 1200);
    } catch {
      // fallback bem simples
      try {
        const url = window.location.href;
        window.prompt("Copie o link:", url);
      } catch {}
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
    >
      {label}
    </button>
  );
}
