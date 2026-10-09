"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { useCart } from "@/lib/cart";
import { CartIcon, CloseIcon, MenuIcon, UserIcon } from "./Icons";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="bg-accent px-4 py-2 text-center text-xs font-semibold tracking-wide text-ink md:text-sm">
        <span className="md:hidden">Frete para todo o Brasil · Retirada grátis em Torres</span>
        <span className="hidden md:inline">Enviamos para todo o Brasil · Retirada grátis nas lojas de Torres</span>
      </div>
      <header className="sticky top-0 z-40 bg-ink text-cream">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-2 md:h-20 md:px-6">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="flex size-11 items-center justify-center lg:hidden"
          >
            <MenuIcon />
          </button>

          <Link href="/" aria-label="Local Roasters – início">
            <Image
              src="/images/logo-roasters-white.png"
              alt="Local Roasters – Microtorrefação local"
              width={1015}
              height={248}
              priority
              className="h-8 w-auto md:h-11"
            />
          </Link>

          <nav aria-label="Principal" className="hidden gap-7 text-[15px] font-medium lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:opacity-80">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#" aria-label="Minha conta" className="hidden size-11 items-center justify-center md:flex">
              <UserIcon />
            </Link>
            <Link
              href="/carrinho"
              aria-label={`Carrinho, ${count} itens`}
              className="relative flex size-11 items-center justify-center rounded-full md:h-11 md:w-auto md:gap-2 md:border-[1.5px] md:border-cream md:px-4 md:text-[15px] md:font-semibold"
            >
              <CartIcon />
              <span className="hidden md:inline">Carrinho ({count})</span>
              <span className="absolute right-1 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-ink md:hidden">
                {count}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink px-4 pb-8 pt-3 text-cream lg:hidden">
          <div className="flex h-16 items-center justify-between">
            <Image src="/images/logo-roasters-white.png" alt="Local Roasters" width={1015} height={248} className="h-8 w-auto" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu" className="flex size-11 items-center justify-center">
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Menu" className="flex flex-col font-display text-4xl uppercase leading-none">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-rule-dark py-4">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="#" className="mt-auto flex min-h-13 items-center justify-center rounded-full border-[1.5px] border-cream font-semibold">
            Minha conta
          </Link>
        </div>
      )}
    </>
  );
}
