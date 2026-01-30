"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      ↑ Topo
    </button>
  );
}
