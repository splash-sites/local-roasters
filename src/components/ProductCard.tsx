import Image from "next/image";
import Link from "next/link";
import { brl } from "@/lib/format";
import { originLine, type Product } from "@/lib/products";

export function CoffeeCard({ product, className = "" }: { product: Product; className?: string }) {
  const v = product.variants[0];
  const href = `/microlotes/${product.slug}`;
  return (
    <article className={`flex flex-col overflow-hidden rounded-md bg-white ${className}`}>
      <Link href={href} className="relative block aspect-[4/5] md:aspect-auto md:h-90">
        <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 768px) 260px, 400px" className="object-cover" />
        {(product.score || product.badge) && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[13px] font-bold md:left-4 md:top-4 md:text-sm ${product.score ? "bg-accent text-ink" : "bg-ink text-cream"}`}
          >
            {product.score ? `${product.score} pts` : product.badge}
          </span>
        )}
      </Link>
      <div className="flex grow flex-col gap-2 p-4 md:gap-2.5 md:p-6">
        <span className="hidden text-[13px] font-semibold uppercase tracking-widest text-muted md:block">{originLine(product)}</span>
        <h3 className="font-display text-2xl uppercase leading-[1.05] md:text-[32px]">
          <Link href={href}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted md:text-base">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2 md:pt-4">
          <span className="text-lg font-bold md:text-xl">
            {brl(v.price)} <span className="text-[13px] font-medium text-muted md:text-sm">· {v.label.toLowerCase()}</span>
          </span>
          <Link href={href} className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-[15px] font-semibold text-cream hover:opacity-85 md:inline-flex">
            Comprar
          </Link>
        </div>
      </div>
    </article>
  );
}

export function AccessoryCard({ product, tall = false }: { product: Product; tall?: boolean }) {
  return (
    <Link href={`/microlotes/${product.slug}`} className="group flex flex-col gap-2 md:gap-3.5">
      <span className={`relative block overflow-hidden rounded-md ${tall ? "h-60 md:h-105" : "h-55 md:h-105"}`}>
        <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 768px) 50vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </span>
      <span className="flex flex-col justify-between gap-1 text-sm font-semibold md:flex-row md:gap-3 md:text-base">
        <span>{product.name}</span>
        <span className="font-bold">{brl(product.variants[0].price)}</span>
      </span>
    </Link>
  );
}
