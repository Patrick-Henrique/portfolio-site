import type { Metadata } from "next";
import "../globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
        <CTAWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
