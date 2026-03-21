# Mondwatch PWA — Como usar no iPhone

## Arquivos necessários
Coloque estes 3 arquivos **na mesma pasta** no servidor:
- `dashboard.html` — o app principal
- `manifest.json` — configuração do PWA
- `sw.js` — service worker (cache offline)

---

## Opção 1: GitHub Pages (Grátis, mais fácil)

1. Crie um repositório no GitHub (ex: `mondwatch`)
2. Faça upload dos 3 arquivos
3. Vá em **Settings → Pages → Source: main branch**
4. Seu app estará em: `https://seuusuario.github.io/mondwatch/dashboard.html`

## Opção 2: Netlify Drop (Grátis, instantâneo)

1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta com os 3 arquivos
3. Pronto! Você recebe uma URL imediatamente

## Opção 3: Vercel (Grátis)

1. Acesse [vercel.com](https://vercel.com)
2. Faça deploy da pasta com os 3 arquivos
3. URL pronta em segundos

---

## Adicionar ao iPhone como App

1. Abra a URL no **Safari** (obrigatório ser o Safari)
2. Toque no botão **Compartilhar** (⬆️ quadrado com seta)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Dê o nome "Mondwatch" e toque **Adicionar**
5. O ícone hexagonal verde aparecerá na sua home screen
6. Ao abrir, ele roda em tela cheia, sem barra do Safari!

---

## O que foi adaptado para iPhone

- ✅ Tela cheia (sem barra de navegação do Safari)
- ✅ Safe areas para notch/Dynamic Island
- ✅ Scroll horizontal nas tabs das wallets
- ✅ Layout responsivo para tela 390px
- ✅ Touch targets maiores
- ✅ Ícone personalizado (hexágono M verde)
- ✅ Status bar translúcida com tema escuro
- ✅ Cache offline via Service Worker
- ✅ Prevenção de pull-to-refresh acidental
