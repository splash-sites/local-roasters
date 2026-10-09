// Dados gerais da loja. Os valores marcados como "fictício" são do protótipo
// e devem ser trocados pelos reais antes de publicar.

export const site = {
  name: "Local Roasters",
  description:
    "Microlotes de cafés especiais torrados em Torres, RS, na primeira microtorrefação do Litoral Norte.",
  whatsapp: "https://wa.me/5551999999999", // fictício
  instagramCoffee: "https://www.instagram.com/localcoffeetorres/",
  instagramRoasters: "https://www.instagram.com/localroasterstorres/",
  legalName: "Local Coffee Cafeteria Ltda.", // fictício
  cnpj: "12.345.678/0001-90", // fictício
  pixDiscount: 0.05,
  installments: 3,
};

export const stores = [
  {
    name: "Centro",
    address: "Av. General Osório, 146",
    space: "Espaço fechado e algumas mesas na calçada",
    hours: "Seg a sex, 7h30 às 18h30 · Sáb, 7h30 às 12h",
    image: "/images/fachada-centro.jpg",
    imageAlt: "Fachada da Local Coffee no Centro de Torres",
    imagePosition: "60% 45%",
    maps: "https://www.google.com/maps/search/?api=1&query=Av.+General+Os%C3%B3rio+146+Torres+RS",
  },
  {
    name: "Molhes",
    address: "R. Egídio Michaelsen, 222",
    space: "Espaço aberto e coberto",
    hours: "Ter a dom, 8h às 18h30",
    image: "/images/molhes.jpg",
    imageAlt: "Local Coffee Molhes, espaço com cobertura e mesas",
    imagePosition: "50% 50%",
    maps: "https://www.google.com/maps/search/?api=1&query=R.+Eg%C3%ADdio+Michaelsen+222+Torres+RS",
  },
];

export const nav = [
  { href: "/#microlotes", label: "Microlotes" },
  { href: "/#acessorios", label: "Acessórios" },
  { href: "/#historia", label: "Nossa história" },
  { href: "/#torrefacao", label: "Torrefação" },
  { href: "/#eventos", label: "Eventos" },
  { href: "/#lojas", label: "Lojas" },
];
