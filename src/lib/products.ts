// Catálogo do protótipo. Preços são fictícios.
// Para o e-commerce real, estes dados passam a vir do banco de dados.

export type Variant = { id: string; label: string; price: number };

export type Product = {
  slug: string;
  kind: "cafe" | "acessorio";
  name: string;
  tagline: string;
  images: { src: string; alt: string; fit?: "cover" | "contain" }[];
  variants: Variant[];
  badge?: string;
  // Somente cafés
  score?: number;
  region?: string;
  farm?: string;
  variety?: string;
  roast?: string;
  notes?: string;
  characteristics?: string;
  goodFor?: string;
  // Texto especial (ex.: história da Caramela)
  story?: { title: string; kicker: string; image: string; paragraphs: string[] };
  related?: string[];
};

export const grinds = [
  { id: "graos", label: "Em grãos" },
  { id: "coado", label: "Coado / filtro" },
  { id: "prensa", label: "Prensa francesa" },
  { id: "espresso", label: "Espresso" },
  { id: "moka", label: "Moka" },
];

export const products: Product[] = [
  {
    slug: "cafe-da-caramela",
    kind: "cafe",
    name: "Café da Caramela",
    tagline: "Caramelo, castanhas e açúcar mascavo.",
    images: [
      { src: "/images/bag-caramela.jpg", alt: "Pacote do Café da Caramela sobre grãos torrados" },
      { src: "/images/caramela.png", alt: "Ilustração da Caramela", fit: "contain" },
      { src: "/images/torra-carga.jpg", alt: "Torra do café na Local Roasters" },
    ],
    variants: [
      { id: "250g", label: "250g", price: 49.9 },
      { id: "500g", label: "500g", price: 89.9 },
    ],
    score: 83,
    region: "Cerrado Mineiro",
    variety: "Guará Natural",
    roast: "Média",
    notes: "Caramelo, castanhas e açúcar mascavo",
    characteristics: "Aroma doce, acidez baixa e baixo amargor",
    goodFor: "Coado, prensa francesa e espresso com leite",
    story: {
      kicker: "Por trás do rótulo",
      title: "Quem é a Caramela?",
      image: "/images/caramela.png",
      paragraphs: [
        "A Caramela foi adotada e chegou até nós há alguns anos. Hoje, ela é casa, é afeto e parte da nossa história. Com ela aprendemos que café também pode ser abrigo.",
        "Todos os dias, cães de rua passam pelas nossas lojas para comer, beber água e receber carinho. Isso nunca foi detalhe: sempre foi propósito. Este microlote leva o nome dela e carrega esse cuidado.",
        "Quando nasceu a Local Roasters, a gente quis um café com a cara dela: doce, tranquilo e fácil de gostar. Notas de caramelo, castanhas e açúcar mascavo, para tomar todo dia. Igual a ela, todo mundo se apaixona de primeira.",
      ],
    },
    related: ["ecobag-cafe-da-caramela", "ruby-natural", "drip-coffee-local"],
  },
  {
    slug: "ruby-natural",
    kind: "cafe",
    name: "Ruby Natural",
    tagline: "Frutas amarelas e chocolate ao leite.",
    images: [
      { src: "/images/bag-ruby.jpg", alt: "Pacote Local Roasters Ruby Natural" },
      { src: "/images/torra-aroma.jpg", alt: "Prova do aroma do café" },
      { src: "/images/torra-pesagem.jpg", alt: "Pesagem do café verde" },
    ],
    variants: [
      { id: "250g", label: "250g", price: 59.9 },
      { id: "500g", label: "500g", price: 109.9 },
    ],
    score: 85,
    farm: "Fazenda Engenho",
    region: "Cerrado Mineiro",
    variety: "Ruby Natural",
    roast: "Clara",
    notes: "Frutas amarelas e chocolate ao leite",
    characteristics: "Corpo leve, acidez presente e doçura equilibrada",
    goodFor: "Coado e métodos filtrados",
    related: ["cafe-da-caramela", "drip-coffee-local", "ecobag-torricas-molhes"],
  },
  {
    slug: "drip-coffee-local",
    kind: "cafe",
    name: "Drip Coffee Local",
    tagline: "Chocolate, nozes e bolacha de maisena.",
    images: [
      { src: "/images/drip.jpg", alt: "Sachê Drip Coffee Local ao lado de uma caneca" },
      { src: "/images/torra-sala.jpg", alt: "Sala de torra da Local Roasters" },
    ],
    variants: [{ id: "cx6", label: "Caixa com 6", price: 39.9 }],
    badge: "Prático",
    region: "Indianópolis, Cerrado Mineiro",
    variety: "Topázio",
    roast: "Média",
    notes: "Chocolate, nozes e bolacha de maisena",
    characteristics: "Pronto em 3 minutos, só com água quente",
    goodFor: "Viagem, trabalho e dia a dia",
    related: ["cafe-da-caramela", "ruby-natural", "mochila-cafe-da-caramela"],
  },
  {
    slug: "ecobag-cafe-da-caramela",
    kind: "acessorio",
    name: "Ecobag Café da Caramela",
    tagline: "Algodão cru com a ilustração da Caramela.",
    images: [{ src: "/images/ecobag-caramela.jpg", alt: "Ecobag Café da Caramela" }],
    variants: [{ id: "un", label: "Única", price: 54.9 }],
    related: ["cafe-da-caramela", "mochila-cafe-da-caramela", "ecobag-torricas-molhes"],
  },
  {
    slug: "ecobag-torricas-molhes",
    kind: "acessorio",
    name: "Ecobag Torrica's · Molhes Edition",
    tagline: "Ilustração do farol e da praia dos Molhes.",
    images: [{ src: "/images/ecobags.jpg", alt: "Ecobags Local Coffee e Torrica's Coffee Molhes Edition" }],
    variants: [{ id: "un", label: "Única", price: 54.9 }],
    related: ["ecobag-cafe-da-caramela", "mochila-cafe-da-caramela", "ruby-natural"],
  },
  {
    slug: "mochila-cafe-da-caramela",
    kind: "acessorio",
    name: "Mochila Café da Caramela",
    tagline: "Mochila saco em algodão, para levar seus cafés.",
    images: [{ src: "/images/mochila-caramela.jpg", alt: "Mochila saco Café da Caramela" }],
    variants: [{ id: "un", label: "Única", price: 64.9 }],
    related: ["cafe-da-caramela", "ecobag-cafe-da-caramela", "drip-coffee-local"],
  },
];

export const coffees = products.filter((p) => p.kind === "cafe");
export const accessories = products.filter((p) => p.kind === "acessorio");

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function originLine(p: Product) {
  return [p.farm, p.region, p.variety, p.roast && `Torra ${p.roast.toLowerCase()}`]
    .filter(Boolean)
    .join(" · ");
}
