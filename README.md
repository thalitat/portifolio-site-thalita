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

## Publicação

Cada push para a branch `main` executa o CI e publica o site no GitHub Pages.
Depois do primeiro deploy, o site fica disponível em
<https://thalitat.github.io/portifolio-site-thalita/>.

## Estrutura

```text
.github/
	workflows/
		deploy-pages.yml   Publicação automática no GitHub Pages
		node.js.yml        Verificação de lint e build
.vscode/
	launch.json         Depuração do Vite no Chrome
	tasks.json          Inicialização do servidor ao depurar
public/
	delivery-work.jpg   Imagem da seção de produto
	favicon.svg         Ícone do site
src/
	app/App.jsx          Estado global, tema e idioma
	components/          Cabeçalho, rodapé, idioma e contato
	content/             Textos em português, inglês e espanhol
	hooks/               Comportamentos reutilizáveis
	pages/               Composição da página principal
	sections/            Seções agrupadas por área de conteúdo
	styles/              Estilos globais e da interface
	main.jsx              Inicialização do React
index.html              Documento de entrada do Vite
package.json            Dependências e scripts
vite.config.js          Configuração do Vite
```

Arquivos que o Vite e o GitHub Actions esperam na raiz permanecem nessa posição. Para atualizar textos ou traduções, edite `src/content/siteContent.js`; componentes reutilizáveis ficam em `src/components/`, comportamento em `src/hooks/`, e a composição das áreas do site em `src/pages/` e `src/sections/`.
