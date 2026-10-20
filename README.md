# FisioVet · Eduarda Pata

Site de fisioterapia e reabilitação veterinária domiciliar em Porto Alegre e região. Interface pensada primeiro para celular, com seis páginas pré-renderizadas e contato pelo WhatsApp.

## Desenvolvimento

Use Node.js 24 LTS e npm. Não são necessários segredos, banco de dados ou backend.

```sh
npm ci
npm run dev
```

## Build e validação

```sh
npm run lint
npm run build
npx playwright install chromium
npm test
```

Se o Chromium já estiver instalado no sistema, não é necessário baixar outro navegador:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

Os testes iniciam o preview na porta 4175. Verificam conteúdo e metadados sem JavaScript, navegação, eventos de contato, cinco larguras de tela (320–1440 px) e acessibilidade automatizada WCAG A/AA. Não enviam mensagens nem eventos reais ao Analytics. Testes automatizados não substituem avaliação com tecnologias assistivas e acompanhamento da conversão real.

## Conteúdo e contatos

- `src/config/site.js`: Instagram, WhatsApp e domínio canônico.
- `src/config/pages.js`: textos específicos e metadados das seis URLs existentes.
- `src/App.jsx`: estrutura compartilhada, perguntas, apresentação e links.
- `src/index.css`: estilos mobile first, tipografia do sistema e movimento reduzido.
- `public/images/eduarda-*.webp`: versões responsivas da foto original `profile-2.jpg`.
- `public/og-image.jpg`: foto real no formato de compartilhamento 1200 × 630.

O texto não inclui depoimentos, credenciais ou garantias de resultado inventados. CRMV, formação e relatos reais podem ser adicionados quando fornecidos pela profissional. A URL do Instagram é `https://www.instagram.com/fisiovet.eduardapata/`.

## Publicação

`npm run build` gera `dist/` com HTML completo, títulos, descrições, canonical, Open Graph e dados estruturados por página. O bundle temporário de renderização é removido ao final. Não é necessário executar um servidor Node em produção.

O build gera versões em diretórios e `.html` para atender URLs sem extensão e com barra final em servidores estáticos. Os links e canonical preservam as URLs anteriores. O sitemap é gerado a partir da mesma lista de páginas. No Netlify, o build usa Node 24 e publica `dist`; endereços inexistentes recebem a página 404, com HTTP 404, conforme as regras de hospedagem. O preview do Vite não simula as regras de status HTTP do Netlify.

O GA4 existente foi preservado no HTML, com um único page view automático por carregamento. Os links registram `click_whatsapp` com `section` e `page_path`, e `click_instagram` com `section`. Caso haja relatórios/conversões baseados nos nomes antigos, atualize-os no GA4. Um clique não confirma uma conversa ou agendamento.
