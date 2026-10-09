"use client";

import Image from "next/image";
import { useState } from "react";
import { brl } from "@/lib/format";
import { grinds, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { site } from "@/lib/site";
import { TruckIcon } from "./Icons";

const chip = (on: boolean) =>
  `min-h-11 rounded-full border-[1.5px] border-ink px-4 text-sm font-semibold transition-colors md:min-h-12 md:px-5 md:text-[15px] ${
    on ? "bg-ink text-cream" : "bg-transparent text-ink hover:bg-sand"
  }`;

export default function ProductView({ product }: { product: Product }) {
  const { add } = useCart();
  const [img, setImg] = useState(0);
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [grind, setGrind] = useState(grinds[0].id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const isCoffee = product.kind === "cafe";
  const variant = product.variants.find((v) => v.id === variantId)!;
  const image = product.images[img];

  function handleAdd() {
    add({
      slug: product.slug,
      name: product.name,
      image: product.images[0].src,
      variant: variant.label,
      grind: isCoffee ? grinds.find((g) => g.id === grind)?.label : undefined,
      price: variant.price,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  const details = [
    ["Fazenda", product.farm],
    ["Região", product.region],
    ["Variedade", product.variety],
    ["Torra", product.roast],
    ["Pontuação", product.score && `${product.score} pontos`],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-14">
      {/* Galeria */}
      <div className="flex flex-col gap-2.5 md:gap-3.5 lg:flex-[1.15] lg:min-w-0">
        <div className="relative h-[100vw] max-h-160 overflow-hidden bg-sand md:h-160 md:rounded-md">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className={image.fit === "contain" ? "object-contain p-8" : "object-cover"}
          />
          {product.score && (
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-1.5 text-sm font-bold text-ink md:left-5 md:top-5 md:text-[15px]">
              {product.score} pts
            </span>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-2 px-4 md:grid md:grid-cols-3 md:gap-3.5 md:px-0">
            {product.images.map((im, i) => (
              <button
                key={im.src}
                type="button"
                onClick={() => setImg(i)}
                aria-label={im.alt}
                aria-pressed={img === i}
                className={`relative size-16 overflow-hidden rounded-md border-2 bg-sand md:h-33 md:w-auto ${img === i ? "border-ink" : "border-transparent"}`}
              >
                <Image src={im.src} alt="" fill sizes="200px" className={im.fit === "contain" ? "object-contain p-1" : "object-cover"} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Informações */}
      <div className="flex flex-col gap-5 px-4 md:gap-6 md:px-0 lg:flex-1 lg:min-w-0">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted md:text-sm">
            {isCoffee ? "Microlote · Local Roasters" : "Acessório · Local Coffee"}
          </span>
          <h1 className="font-display text-[46px] font-normal uppercase leading-none md:text-[76px] md:leading-[0.98]">{product.name}</h1>
          <p className="text-muted md:text-xl">{product.tagline}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-3xl font-bold leading-tight md:text-4xl">{brl(variant.price)}</div>
          <div className="text-sm text-muted md:text-[15px]">
            {brl(variant.price * (1 - site.pixDiscount))} no Pix (5% off) · ou {site.installments}x de {brl(variant.price / site.installments)} sem juros
          </div>
        </div>

        {details.length > 0 && (
          <dl className="grid grid-cols-2 border-l border-t border-line text-[15px] md:text-base">
            {details.map(([k, v]) => (
              <div key={k} className="border-b border-r border-line px-3 py-2.5 md:px-4 md:py-3.5">
                <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted md:text-xs">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        )}

        {isCoffee && (
          <fieldset>
            <legend className="mb-2.5 font-bold">
              Moagem: <span className="font-medium">{grinds.find((g) => g.id === grind)?.label}</span>
            </legend>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {grinds.map((g) => (
                <button key={g.id} type="button" aria-pressed={grind === g.id} onClick={() => setGrind(g.id)} className={chip(grind === g.id)}>
                  {g.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {product.variants.length > 1 && (
          <fieldset>
            <legend className="mb-2.5 font-bold">Peso</legend>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {product.variants.map((v) => (
                <button key={v.id} type="button" aria-pressed={variantId === v.id} onClick={() => setVariantId(v.id)} className={chip(variantId === v.id)}>
                  {v.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {/* Barra de compra: fixa no rodapé no celular, em linha no desktop */}
        <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2.5 border-t border-line bg-white px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2.5 md:static md:z-auto md:border-0 md:bg-transparent md:p-0">
          <div className="flex h-12.5 items-center rounded-full border-[1.5px] border-ink md:h-14">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuir quantidade" className="h-full w-11 text-xl md:w-13">
              −
            </button>
            <span aria-live="polite" className="min-w-5 text-center font-bold md:min-w-7">
              {qty}
            </span>
            <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Aumentar quantidade" className="h-full w-11 text-xl md:w-13">
              +
            </button>
          </div>
          <button type="button" onClick={handleAdd} className="min-h-12.5 flex-1 rounded-full bg-ink text-[15px] font-bold text-cream hover:opacity-90 md:min-h-14 md:text-[17px]">
            {added ? "Adicionado ao carrinho ✓" : <>Adicionar<span className="md:hidden"> · {brl(variant.price * qty)}</span><span className="hidden md:inline"> ao carrinho</span></>}
          </button>
        </div>

        <div className="flex flex-col gap-3 rounded-md bg-white p-4 md:p-5">
          <label htmlFor="cep" className="flex items-center gap-2 font-bold">
            <TruckIcon />
            Calcule o frete
          </label>
          <div className="flex gap-2.5">
            <input
              id="cep"
              type="text"
              inputMode="numeric"
              placeholder="00000-000"
              className="min-h-12 min-w-0 flex-1 rounded-md border-[1.5px] border-line bg-cream px-4 text-ink"
            />
            <button type="button" className="min-h-12 rounded-md border-[1.5px] border-ink px-5 font-semibold">
              Calcular
            </button>
          </div>
          <span className="text-sm text-muted">Correios e transportadoras via Melhor Envio, ou retire grátis em uma das lojas em Torres.</span>
        </div>
      </div>
    </div>
  );
}
