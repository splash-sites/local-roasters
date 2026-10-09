# Local Roasters · prévia do site

Prévia da loja online da Local Roasters (microtorrefação da Local Coffee, Torres/RS).
Feita em **Next.js 16 + TypeScript + Tailwind CSS 4**.

## Rodar no computador

Requisito: Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel

1. Crie um repositório no GitHub e envie esta pasta:
   ```bash
   git init
   git add .
   git commit -m "Prévia do site Local Roasters"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/local-roasters.git
   git push -u origin main
   ```
2. Em vercel.com, clique em **Add New → Project**, importe o repositório e clique em **Deploy**.
   Não precisa configurar nada: a Vercel detecta o Next.js sozinha.
3. O link fica algo como `local-roasters.vercel.app`. Cada `git push` atualiza o site.

## Onde editar

| O quê | Arquivo |
|---|---|
| Produtos, preços, fotos, história da Caramela | `src/lib/products.ts` |
| Lojas, horários, WhatsApp, Instagram, CNPJ | `src/lib/site.ts` |
| Cores e fontes | `src/app/globals.css` |
| Página inicial | `src/app/page.tsx` |
| Página do produto | `src/app/microlotes/[slug]/page.tsx` e `src/components/ProductView.tsx` |
| Carrinho | `src/app/carrinho/page.tsx` e `src/lib/cart.tsx` |
| Cabeçalho e rodapé | `src/components/Header.tsx` e `src/components/Footer.tsx` |
| Imagens | `public/images/` |

## O que é fictício nesta prévia

- Preços dos produtos, número do WhatsApp, razão social e CNPJ (`src/lib/site.ts` e `src/lib/products.ts`).
- O carrinho funciona e fica salvo no navegador, mas **não há pagamento**: o botão "Finalizar compra" é só visual.
- O cálculo de frete é só visual.

## Próximos passos (versão final)

- Banco de dados (Postgres na Neon ou Supabase) com Drizzle ou Prisma.
- Pagamento com Mercado Pago (Checkout Transparente: Pix e cartão).
- Frete com a API do Melhor Envio.
- E-mails de pedido com Resend.
- Painel administrativo para produtos, estoque e pedidos.

## Fontes

Anton e Archivo, hospedadas no projeto (`src/fonts`), sob licença SIL Open Font License.
