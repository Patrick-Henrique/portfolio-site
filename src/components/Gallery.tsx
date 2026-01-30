import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  if (!images?.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight">Galeria</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
