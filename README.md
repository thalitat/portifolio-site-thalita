# Thalita Oliveira | Produtos Digitais & TI

Portfólio profissional de Thalita Oliveira, Product Designer (UX/UI) e Product Owner com mais de 7 anos de experiência em produtos digitais B2B, SaaS e ERP. Apresenta projetos, métricas, aulas, mentorias e palestras. O site é responsivo, oferece conteúdo em português, inglês e espanhol e conta com temas claro e escuro.

## Páginas

- `/` — Sobre, métricas e abordagem de produto.
- `/projetos/` — Cases, resultados e protótipo SmartFarma.
- `/servicos/` — Serviços de produto digital, UX e formação.
- `/palestras/` — Palestra incorporada do YouTube.
- `/voluntariado/` — Aulas, mentorias e atuação na comunidade.
- `/contato/` — Atendimento, localização e contato por WhatsApp.

Todas as páginas estão disponíveis em português, inglês e espanhol pelo seletor de idioma.

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
	pages/               Composição compartilhada das páginas
	sections/            Conteúdo independente de cada página
	styles/              Estilos globais e da interface
	main.jsx              Inicialização do React
index.html              Documento de entrada do Vite
projetos/index.html     Entrada estática da página de projetos
servicos/index.html     Entrada estática da página de serviços
palestras/index.html    Entrada estática da página de palestras
voluntariado/index.html Entrada estática da página de voluntariado
contato/index.html      Entrada estática da página de contato
package.json            Dependências e scripts
vite.config.js          Configuração do Vite
```

Arquivos que o Vite e o GitHub Actions esperam na raiz permanecem nessa posição. Para atualizar textos ou traduções, edite `src/content/siteContent.js`; componentes reutilizáveis ficam em `src/components/`, comportamento em `src/hooks/`, e a composição das áreas do site em `src/pages/` e `src/sections/`.
