import { site } from "@/lib/site";

export default function CTAWhatsApp() {
  return (
    <a
      href={site.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 rounded-full border bg-white px-4 py-3 text-sm shadow-sm hover:bg-zinc-50"
    >
      Falar no WhatsApp
    </a>
  );
}
