# Thalita Oliveira | Design Engineer

Portfolio profissional de Thalita Oliveira, apresentando trabalho de produto digital da estratégia à implementação. O site é responsivo e oferece conteúdo em português, inglês e espanhol, além de temas claro e escuro.

## O site

- Projetos e frentes de atuação em UX, plataformas B2B e sistemas ERP.
- Protótipo navegável SmartFarma incorporado à página.
- Abordagem, serviços, impacto social e modelo de atendimento remoto e presencial em Uberaba/MG.
- Palestra incorporada do YouTube, mapa e contato por WhatsApp.
- Seção sobre o ciclo de produto, da ideação ao delivery.

## Tecnologias

- React 19
- Vite 8
- CSS responsivo, sem framework visual externo
- Oxlint

## Requisitos

Node.js `^20.19.0` ou `>=22.12.0`.

## Desenvolvimento

```sh
npm install
npm run dev
```

O Vite informa a URL local no terminal.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Abre localmente a versão de produção. |
| `npm run lint` | Verifica o código com Oxlint. |

## Estrutura

```text
public/
	delivery-work.jpg      Imagem da seção de produto
	favicon.svg            Ícone do site
src/
	App.jsx                Estado global, tema e idioma
	App.css                Componentes e layout responsivo
	index.css              Tokens globais, cores e reset
	main.jsx               Inicialização do React
	components/             Elementos compartilhados da interface
	data/siteContent.js    Textos em português, inglês e espanhol
	hooks/                  Comportamentos reutilizáveis
	pages/HomePage.jsx      Composição da página principal
	sections/               Seções agrupadas por área de conteúdo
```

Configurações do Vite e o `index.html` permanecem na raiz, como esperado pelo projeto. Para atualizar textos ou traduções, edite `src/data/siteContent.js`. Elementos compartilhados ficam em `src/components/`, comportamentos reutilizáveis em `src/hooks/` e seções da página em `src/sections/`.
