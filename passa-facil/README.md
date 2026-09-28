# Passa Fácil

MVP de um app de supermercado: o cliente escaneia o código de barras com a câmera do celular, vê o preço e decide se adiciona ao carrinho ou deixa o item na prateleira.

Todos os dados (mercados, produtos e preços) são **fictícios**.

## Funcionalidades

- Início com supermercados da região e botão **Iniciar compras**
- Scanner de código de barras pela câmera (leitor nativo do navegador, com ZXing como alternativa) e simulação por código ou produtos sugeridos
- Carrinho com total, quantidades e finalização simulada (QR de saída)
- Ofertas, lista de compras e perfil (com modo escuro)
- Carrinho, lista e perfil salvos no `localStorage`

## Estrutura

```
public/
  index.html            página principal
  styles.css            estilos
  app.js                lógica, catálogo fictício e telas
  favicon.svg
  manifest.webmanifest  permite "Adicionar à tela inicial"
vercel.json             configuração do deploy e permissão de câmera
```

Site estático: não há build nem dependências.

## Rodar localmente

A câmera só funciona em HTTPS ou em `localhost`:

```bash
npx serve public
# ou
python3 -m http.server 3000 --directory public
```

Abra `http://localhost:3000`. Para testar no celular, use o link publicado (HTTPS).

## Deploy na Vercel

1. Suba este repositório no GitHub.
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. Framework Preset: **Other**. Deixe Build Command vazio. O `vercel.json` já define `public` como pasta de saída.
4. Clique em **Deploy**.

Cada `git push` na branch principal gera um novo deploy.

## Personalização

- **Produtos e preços:** edite a lista `P` em `public/app.js` (código EAN, nome, embalagem, preço, preço promocional, tipo e cor da embalagem).
- **Supermercados:** edite a lista `M` em `public/app.js`.
- **Logos reais:** salve as imagens em `public/logos/` e, no início do `app.js`, preencha `L`, por exemplo `L[0]="logos/mercado1.png"`. Use apenas marcas que você tenha autorização para exibir.
- **Códigos que não estão no catálogo** viram um produto fictício com preço gerado a partir do código, para que qualquer embalagem funcione nos testes.

## Testar a câmera

- Abra o link direto no navegador do celular (Chrome no Android, Safari no iPhone) e permita o acesso à câmera.
- No iPhone, o leitor é carregado pela biblioteca ZXing e leva um instante a mais para iniciar.
