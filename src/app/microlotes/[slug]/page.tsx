import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import { AccessoryCard } from "@/components/ProductCard";
import { Heading, Kicker } from "@/components/ui";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return p ? { title: p.name, description: p.tagline } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = (product.related ?? []).map(getProduct).filter((p) => p !== undefined);
  const isCoffee = product.kind === "cafe";

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-0 pb-14 md:gap-7 md:px-6 md:pb-24 md:pt-7">
          <nav aria-label="Você está em" className="hidden flex-wrap gap-2 text-sm text-muted md:flex">
            <Link href="/">Início</Link>
            <span>/</span>
            <Link href={isCoffee ? "/#microlotes" : "/#acessorios"}>{isCoffee ? "Microlotes" : "Acessórios"}</Link>
            <span>/</span>
            <span className="font-semibold text-ink">{product.name}</span>
          </nav>
          <ProductView product={product} />
        </div>
      </section>

      {isCoffee && (
        <section className="bg-ink text-cream">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 md:gap-12 md:px-6 md:py-24">
            <Heading className="text-[40px] md:text-[64px]">Na xícara</Heading>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Notas sensoriais", product.notes],
                ["Características", product.characteristics],
                ["Pontuação", product.score ? `${product.score} pontos` : "Café especial"],
                ["Bom para", product.goodFor],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-2 border-t-2 border-accent pt-4 md:pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted-dark md:text-[13px]">{label}</span>
                  <span className="text-lg font-semibold md:text-[22px]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.story && (
        <section className="bg-sand">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 md:flex-row md:gap-14 md:px-6 md:py-24">
            <div className="flex justify-center md:flex-1">
              <Image src={product.story.image} alt="Ilustração da Caramela, a cachorra da Local Coffee" width={636} height={499} className="h-auto w-56 md:w-full md:max-w-md" />
            </div>
            <div className="flex flex-col gap-4 md:flex-1 md:gap-5">
              <Kicker>{product.story.kicker}</Kicker>
              <Heading className="text-[40px] md:text-[64px]">{product.story.title}</Heading>
              {product.story.paragraphs.map((t) => (
                <p key={t.slice(0, 20)} className="text-[#3F3A34]">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 md:gap-10 md:px-6 md:py-24">
            <Heading className="text-[40px] md:text-[56px]">Combina com</Heading>
            <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 md:gap-7">
              {related.map((p) => (
                <AccessoryCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Espaço para a barra de compra fixa no celular */}
      <div className="h-20 bg-cream md:hidden" aria-hidden />
    </>
  );
}
