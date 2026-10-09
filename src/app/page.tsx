import Image from "next/image";
import Link from "next/link";
import { AccessoryCard, CoffeeCard } from "@/components/ProductCard";
import { ButtonLink, Heading, Kicker } from "@/components/ui";
import { ChatIcon, PinIcon, TruckIcon } from "@/components/Icons";
import { accessories, coffees } from "@/lib/products";
import { site, stores } from "@/lib/site";

const wrap = "mx-auto max-w-7xl px-4 md:px-6";
const section = "scroll-mt-20 py-14 md:py-26";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-cream">
        <div className={`${wrap} flex flex-col-reverse gap-8 pb-12 md:pb-22 lg:flex-row lg:items-center lg:gap-14 lg:pt-14`}>
          <div className="flex flex-col gap-5 md:gap-7 lg:flex-1">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-dark md:text-sm">
              <Image src="/images/pin-white.png" alt="" width={696} height={1028} className="h-5 w-auto" />
              Microtorrefação local · Torres, RS
            </div>
            <Heading as="h1" className="text-[56px] leading-[0.95] md:text-[88px] xl:text-[104px]">
              Seu café local, em Torres!
            </Heading>
            <p className="max-w-lg text-muted-dark md:text-xl">
              Microlotes de cafés especiais torrados aqui, na primeira microtorrefação do Litoral Norte. Do mesmo time que trouxe o primeiro coffee to go da cidade.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#microlotes" variant="accent" arrow className="min-h-13 px-7">
                Ver microlotes
              </ButtonLink>
              <ButtonLink href="/#historia" variant="outline-light" className="min-h-13 px-7">
                Nossa história
              </ButtonLink>
            </div>
          </div>
          <div className="relative -mx-4 sm:mx-0 lg:flex-1">
            <div className="relative h-100 overflow-hidden sm:rounded-md md:h-140 lg:h-160">
              <Image src="/images/torra-carga.jpg" alt="Mestre de torra carregando grãos verdes no torrador" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <Link
              href="/microlotes/cafe-da-caramela"
              className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-md bg-cream p-2.5 text-ink shadow-2xl sm:right-auto sm:max-w-80 md:gap-4 md:p-4 lg:-left-7 lg:bottom-8"
            >
              <Image src="/images/bag-caramela.jpg" alt="" width={64} height={64} className="size-12 rounded object-cover md:size-16" />
              <span className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted md:text-xs">Microlote em destaque</span>
                <span className="font-bold">Café da Caramela · 83 pts</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Selos */}
      <section className="border-b border-line bg-sand">
        <div className={`${wrap} grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:py-7 lg:grid-cols-4`}>
          {[
            ["1º", "Coffee to go de Torres"],
            ["1ª", "Microtorrefação do Litoral Norte gaúcho"],
            ["83+", "Cafés especiais com pontuação SCA"],
          ].map(([big, text]) => (
            <div key={big} className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3.5">
              <span className="font-display text-3xl leading-none md:text-[40px]">{big}</span>
              <span className="text-sm font-semibold leading-snug md:text-base">{text}</span>
            </div>
          ))}
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3.5">
            <TruckIcon className="size-8 md:size-9" />
            <span className="text-sm font-semibold leading-snug md:text-base">Frete para todo o Brasil ou retirada na loja</span>
          </div>
        </div>
      </section>

      {/* Microlotes */}
      <section id="microlotes" className={`${section} bg-cream`}>
        <div className={`${wrap} flex flex-col gap-8 md:gap-12`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-2xl flex-col gap-3">
              <Kicker>Torrados em Torres</Kicker>
              <Heading className="text-[44px] md:text-7xl">Nossos microlotes</Heading>
              <p className="text-muted">Cada lote vem com fazenda, região, variedade e pontuação no rótulo. Você escolhe a moagem certa para o seu método.</p>
            </div>
            <ButtonLink href="/#microlotes" arrow className="hidden md:inline-flex">
              Ver todos
            </ButtonLink>
          </div>
          {/* Carrossel no celular, grade no desktop */}
          <div className="no-scrollbar -mx-4 flex snap-x gap-3.5 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0">
            {coffees.map((p) => (
              <CoffeeCard key={p.slug} product={p} className="w-65 shrink-0 snap-start md:w-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section id="historia" className={`${section} bg-ink text-cream`}>
        <div className={`${wrap} flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16`}>
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:flex-1">
            <div className="relative h-72 overflow-hidden rounded-md md:h-130">
              <Image src="/images/fachada-centro.jpg" alt="Fachada da Local Coffee no Centro de Torres" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover object-[60%_45%]" />
            </div>
            <div className="relative mt-10 h-72 overflow-hidden rounded-md md:mt-16 md:h-130">
              <Image src="/images/latte.jpg" alt="Barista fazendo latte art" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-6 lg:flex-1">
            <Kicker dark>Nossa história</Kicker>
            <Heading className="text-[40px] leading-[1.02] md:text-[64px]">Cinco anos na Austrália. Uma volta para casa.</Heading>
            <p className="text-muted-dark">
              Depois de cinco anos morando na Austrália, voltamos ao Brasil com um sonho: trabalhar com o que a gente ama, que é café. Passamos 2020 inteiro planejando esse momento, e a Local Coffee nasceu em Torres como o primeiro coffee to go da cidade.
            </p>
            <p className="text-muted-dark">
              O propósito sempre foi maior. Por isso criamos a Local Roasters, nossa microtorrefação, para levar café especial torrado aqui, com carinho e dedicação, da xícara da loja para a sua casa.
            </p>
            <ButtonLink href="#" variant="outline-light" arrow className="self-stretch sm:self-start">
              Conheça a história completa
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Torrefação */}
      <section id="torrefacao" className={`${section} bg-sand`}>
        <div className={`${wrap} flex flex-col gap-8 md:gap-12`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex flex-col gap-3 lg:max-w-2xl">
              <Kicker>A torrefação</Kicker>
              <Heading className="text-[44px] md:text-7xl">Do grão verde à sua xícara</Heading>
            </div>
            <p className="text-muted lg:max-w-md">
              Selecionamos o café verde, pesamos cada carga, acompanhamos a curva de torra e provamos cada lote antes de embalar. Pequenos lotes, torrados com frequência, para o café chegar fresco até você.
            </p>
          </div>
          <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
            {[
              ["/images/torra-pesagem.jpg", "Pesagem do café verde", "Seleção e pesagem do café verde"],
              ["/images/torra-sala.jpg", "Acompanhamento da curva de torra no computador", "Torra com perfil acompanhado"],
              ["/images/torra-aroma.jpg", "Mestre de torra sentindo o aroma do café", "Prova de cada lote antes de embalar"],
            ].map(([src, alt, caption], i) => (
              <figure key={src} className="flex w-60 shrink-0 snap-start flex-col gap-2 md:w-auto md:gap-3">
                <div className="relative h-75 overflow-hidden rounded-md md:h-110">
                  <Image src={src} alt={alt} fill sizes="(max-width: 768px) 240px, 33vw" className="object-cover" />
                </div>
                <figcaption className="text-sm font-semibold md:text-base">
                  <span className="mr-2 font-display text-lg font-normal md:text-[22px]">0{i + 1}</span>
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Acessórios */}
      <section id="acessorios" className={`${section} bg-cream`}>
        <div className={`${wrap} flex flex-col gap-8 md:gap-12`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <Kicker>Community, connections &amp; specialty coffee</Kicker>
              <Heading className="text-[44px] md:text-7xl">Acessórios</Heading>
            </div>
            <ButtonLink href="/#acessorios" arrow className="hidden md:inline-flex">
              Ver todos
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 md:gap-7">
            {accessories.map((p, i) => (
              <div key={p.slug} className={i === accessories.length - 1 ? "col-span-2 md:col-span-1" : ""}>
                <AccessoryCard product={p} tall={i === accessories.length - 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section id="eventos" className={`${section} bg-ink text-cream`}>
        <div className={`${wrap} flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16`}>
          <div className="flex flex-col gap-5 md:gap-6 lg:flex-1">
            <Image src="/images/localcoffee-wordmark-white.png" alt="Local Coffee" width={973} height={504} className="h-13 w-auto self-start md:h-18" />
            <Heading className="text-[44px] md:text-7xl">Café especial no seu evento</Heading>
            <p className="text-muted-dark">
              Levamos o carrinho Local Coffee Eventos, nossos baristas e os nossos cafés para casamentos, eventos corporativos, feiras e festas. Conte como é o seu evento e montamos uma proposta.
            </p>
            <div className="flex flex-wrap gap-2.5 text-sm font-semibold">
              {["Casamentos", "Corporativos", "Feiras e festas"].map((t) => (
                <span key={t} className="rounded-full border border-muted px-3.5 py-2">
                  {t}
                </span>
              ))}
            </div>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-accent px-7 font-bold text-ink hover:opacity-85 sm:self-start">
              <ChatIcon />
              Pedir orçamento pelo WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:flex-1">
            <div className="relative h-80 overflow-hidden rounded-md md:h-140">
              <Image src="/images/eventos.jpg" alt="Baristas no carrinho Local Coffee Eventos" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative mt-10 h-80 overflow-hidden rounded-md md:mt-12 md:h-140">
              <Image src="/images/latte.jpg" alt="Latte art servido em evento" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover object-[60%_50%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Lojas */}
      <section id="lojas" className={`${section} bg-cream`}>
        <div className={`${wrap} flex flex-col gap-8 md:gap-12`}>
          <div className="flex flex-col gap-3">
            <Kicker>Venha nos visitar</Kicker>
            <Heading className="text-[44px] md:text-7xl">Nossas lojas em Torres</Heading>
            <p className="max-w-2xl text-muted">O mesmo cardápio nas duas lojas: brunch, lanches, cafés especiais, brownies e doces, para comer lá ou levar.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-7">
            {stores.map((s) => (
              <article key={s.name} className="flex flex-col overflow-hidden rounded-md bg-white">
                <div className="relative h-50 md:h-95">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: s.imagePosition }} />
                </div>
                <div className="flex flex-col gap-2 p-5 md:gap-2.5 md:p-7">
                  <Heading as="h3" className="text-[28px] md:text-4xl">
                    {s.name}
                  </Heading>
                  <p className="flex items-center gap-2">
                    <PinIcon />
                    {s.address} – {s.name}
                  </p>
                  <p className="text-sm text-muted md:text-base">
                    {s.space} · Coffee to go
                    <br />
                    {s.hours}
                  </p>
                  <ButtonLink href={s.maps} external className="mt-2 min-h-11 text-[15px] sm:self-start">
                    Como chegar
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
