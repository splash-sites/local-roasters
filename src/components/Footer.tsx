import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const titleCls = "text-[13px] font-bold uppercase tracking-[0.12em] text-muted-dark";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-10 pt-14 md:px-6 md:pt-18">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex max-w-sm flex-col gap-5">
            <Image src="/images/logo-roasters-white.png" alt="Local Roasters" width={1015} height={248} className="h-11 w-auto self-start md:h-13" />
            <p className="text-muted-dark">Microtorrefação local da Local Coffee. Torres, Rio Grande do Sul.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-14">
            <nav aria-label="Loja" className="flex flex-col gap-2.5">
              <span className={titleCls}>Loja</span>
              <Link href="/#microlotes">Microlotes</Link>
              <Link href="/#acessorios">Acessórios</Link>
              <Link href="#">Frete e entregas</Link>
              <Link href="#">Trocas e devoluções</Link>
            </nav>
            <nav aria-label="Sobre" className="flex flex-col gap-2.5">
              <span className={titleCls}>Sobre</span>
              <Link href="/#historia">Nossa história</Link>
              <Link href="/#torrefacao">Torrefação</Link>
              <Link href="/#eventos">Eventos</Link>
              <Link href="/#lojas">Lojas</Link>
            </nav>
            <nav aria-label="Redes" className="flex flex-col gap-2.5">
              <span className={titleCls}>Siga</span>
              <a href={site.instagramCoffee} target="_blank" rel="noreferrer">@localcoffeetorres</a>
              <a href={site.instagramRoasters} target="_blank" rel="noreferrer">@localroasterstorres</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-rule-dark pt-6 text-sm text-muted-dark">
          <span>
            © 2026 {site.legalName} · CNPJ {site.cnpj}
          </span>
          <span>Pagamento por Pix e cartão · Envio para todo o Brasil</span>
        </div>
      </div>
    </footer>
  );
}
