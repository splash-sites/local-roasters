"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { brl } from "@/lib/format";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

export default function CartPage() {
  const { items, subtotal, setQty, remove } = useCart();

  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 md:px-6 md:py-20">
        <h1 className="font-display text-[44px] font-normal uppercase leading-none md:text-7xl">Seu carrinho</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-start gap-5 rounded-md bg-white p-6 md:p-8">
            <p className="text-lg">Seu carrinho está vazio por enquanto.</p>
            <ButtonLink href="/#microlotes" variant="dark" arrow>
              Ver microlotes
            </ButtonLink>
          </div>
        ) : (
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <ul className="flex flex-col gap-3 lg:flex-1">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4 rounded-md bg-white p-3 md:p-4">
                  <Link href={`/microlotes/${i.slug}`} className="relative size-20 shrink-0 overflow-hidden rounded md:size-24">
                    <Image src={i.image} alt="" fill sizes="96px" className="object-cover" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <Link href={`/microlotes/${i.slug}`} className="font-bold">
                      {i.name}
                    </Link>
                    <span className="text-sm text-muted">{[i.variant, i.grind].filter(Boolean).join(" · ")}</span>
                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div className="flex h-10 items-center rounded-full border-[1.5px] border-ink">
                        <button type="button" onClick={() => setQty(i.key, i.qty - 1)} aria-label="Diminuir" className="h-full w-9">
                          −
                        </button>
                        <span className="min-w-5 text-center font-bold">{i.qty}</span>
                        <button type="button" onClick={() => setQty(i.key, i.qty + 1)} aria-label="Aumentar" className="h-full w-9">
                          +
                        </button>
                      </div>
                      <span className="font-bold">{brl(i.price * i.qty)}</span>
                    </div>
                  </div>
                  <button type="button" onClick={() => remove(i.key)} className="self-start text-sm text-muted underline">
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <aside className="flex flex-col gap-4 rounded-md bg-white p-5 md:p-6 lg:w-90">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">{brl(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted">
                <span>No Pix (5% off)</span>
                <span>{brl(subtotal * (1 - site.pixDiscount))}</span>
              </div>
              <div className="flex justify-between text-sm text-muted">
                <span>Frete</span>
                <span>Calculado no checkout</span>
              </div>
              <button type="button" className="min-h-13 rounded-full bg-ink font-bold text-cream hover:opacity-90">
                Finalizar compra
              </button>
              <p className="text-center text-xs text-muted">Prévia do site: o pagamento por Pix e cartão entra na versão final.</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
