# Meta Pixel — implementação, validação e operação

Pixel público: `1431388415116120`. Eventos: somente `PageView` e `Contact`. Sem CAPI, Lead, Schedule ou dados adicionais de correspondência avançada.

## Estado final autorizado

O responsável solicitou carregamento automático, igual ao GA4 existente, sem banner. Essa decisão está explícita em `META_PIXEL_AUTO_START = true`, em `src/config/metaPixel.js`. Ela é uma configuração técnica, **não prova de consentimento nem conclusão sobre a base legal aplicável**. Ao carregar uma página permitida, o Pixel inicializa e envia PageView automaticamente. Contact ocorre apenas no clique de WhatsApp.

Não há CMP/gerenciador de consentimento nem política de privacidade no repositório. É necessário revisar com o responsável o aviso de privacidade, uso de Meta para mensuração/publicidade, cookies, compartilhamento, direitos e mecanismo aplicável de escolha/revogação. Não foi inventada política jurídica nem alterado layout/texto para isso. Mensuração envia dados de navegação à Meta; não é sinônimo de publicação pública de informações.

O GA4 pré-existente continua como estava, direto no HTML, inclusive sem gate de consentimento. Não há contêiner GTM: o domínio googletagmanager.com carrega gtag/GA4. Não havia outro Pixel no repositório. Uma tentativa de inspecionar o site publicado e o status de deployment pela API GitHub foi bloqueada pelo proxy (403/Forbidden); a ausência de política/CMP foi constatada no repositório, não validada independentemente em produção.

## Arquitetura e arquivos alterados

React 19 + Vite 8, seis páginas pré-renderizadas no build e hidratadas no browser. Links internos normais geram documentos novos; não existe roteador SPA ativo. Fragmentos de seção não são novas páginas.

- `src/config/metaPixel.js`: ID público, modo automático e nome do evento opcional de consentimento; sem segredo/variável de ambiente, seguindo a configuração estática existente.
- `src/utils/metaPixel.js`: bootstrap oficial adaptado, inicialização/PageView idempotentes, proteção de URLs e hook opcional para futura CMP. Não executa no servidor/renderização.
- `src/main.jsx`: inicialização fora dos efeitos React/StrictMode para não duplicar tracking.
- `src/utils/trackWhatsApp.js`: preserva `click_whatsapp` do GA4 e acrescenta um Contact por evento nativo. Cliques distintos continuam distintos. Não há listener delegado concorrente.
- `src/App.jsx`: helper nos handlers `onClick`/`onAuxClick`. Nenhuma mudança em href, número, mensagem, target, rel, texto ou acessibilidade.
- `tests/meta-pixel.spec.js`: testes locais com SDK e destinos externos simulados.
- `tests/site.spec.js`: bloqueia também rede Meta durante a suíte existente, para não emitir eventos reais nos testes.
- Este documento: inventário, limites, revisão de privacidade e validação operacional.

Sem mudanças em HTML base, CSS, SEO, textos, dependências ou outros repositórios.

## Carregamento e PageView

1. Bootstrap oficial `fbq`, carregado assincronamente de `https://connect.facebook.net/en_US/fbevents.js` uma vez por documento.
2. `fbq('set', 'autoConfig', false, ID)` antes de `init`, para desativar configuração/eventos automáticos. `init` recebe somente o ID, sem nome, email, telefone ou dados clínicos.
3. Um `PageView` por pathname real em cada documento. Hidratação, StrictMode, scroll, hover e navegação para âncoras não repetem o evento. Nova página nativa inicializa seu próprio documento uma vez.
4. Nenhum beacon noscript foi adicionado: não há coleta Meta quando o JavaScript não executa.

Se futuramente houver roteamento SPA, chamar `trackMetaPageView()` depois de mudanças reais de pathname; não em renderização, clique de âncora ou efeito repetido. Não instalar novamente via HTML/GTM/Event Setup Tool. Se detectar `fbq`/fbevents pré-existente de outra instalação, o módulo não inicializa nem emite eventos, até essa concorrência ser revisada.

## WhatsApp: evento único e inventário

```js
fbq("track", "Contact", {
  content_name: "whatsapp",
  content_category: "veterinary_physiotherapy",
});
```

Contact indica intenção de abrir WhatsApp; não comprova mensagem enviada nem agendamento. Não copia número, mensagem, href, localização, título ou dados clínicos para os parâmetros do evento. Mantém o GA4 e não aguarda a rede para navegar. SDK bloqueado, falha de GA/Meta ou revogação não impedem abrir o destino original em nova aba. Cliques de teclado/primários e do meio são cobertos; clique direito é ignorado. O mesmo evento nativo não pode produzir dois Contacts.

Todos os oito pontos usam `ContactLink` e o mesmo helper nas seis rotas:

| section       | Local               | Visibilidade atual                         |
| ------------- | ------------------- | ------------------------------------------ |
| header        | Cabeçalho           | Desktop                                    |
| mobile_menu   | Menu móvel          | Oculto pelo comportamento mobile existente |
| hero          | Abertura            | Desktop                                    |
| how_it_works  | Como funciona       | Desktop                                    |
| service_area  | Consulta de bairro  | Desktop                                    |
| closing       | CTA final           | Desktop                                    |
| footer        | Rodapé              | Desktop                                    |
| mobile_sticky | Barra inferior fixa | Mobile                                     |

Não foram encontrados outros formatos `api.whatsapp.com`, `whatsapp://`, links de cards ou chamadas `window.open` fora dessa estrutura. Não há tracking Meta delegado no documento.

## URLs, dados automáticos e limitações

O SDK da Meta envia URL/referrer, identificadores e dados técnicos automaticamente. Os parâmetros customizados fixos não significam ausência de tratamento de dados pessoais pelo serviço.

A integração aceita somente as seis páginas conhecidas e fragmentos de seção conhecidos. Queries permitem apenas `fbclid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id`, `campaign_id`, `ad_id`, `adset_id`, com valores de 1–512 caracteres limitados a letras ASCII, números, ponto, sublinhado, til e hífen. Isso permite os IDs/tokens usuais da campanha sem limpar ou reescrever a URL.

Queries desconhecidas como `email`, `phone`, `text`, valores com `@`, espaços ou caracteres fora desse conjunto, fragmentos desconhecidos, e referrers fora das mesmas restrições bloqueiam o carregamento/envio Meta. Isso pode excluir visitas com campanhas que usem textos livres/acentos/espaços no UTM. Use IDs ou tokens, por exemplo `utm_campaign=campaign_42`. A allowlist não é um classificador de dados pessoais: **nunca coloque nomes, telefones ou dados de pacientes nos parâmetros permitidos**. Esse controle vale também para os materiais de campanha, não apenas para o código.

## Hook opcional para uma futura CMP

O listener é mantido para integração futura, sem novo banner nem persistência automática. Para exigir autorização prévia no futuro, definir `META_PIXEL_AUTO_START = false` e conectar uma CMP antes de publicar. Depois que `main.jsx` estiver carregado, comunicar a escolha explícita de marketing:

```js
window.dispatchEvent(
  new CustomEvent("fisiovet:marketing-consent", {
    detail: { granted: true },
  }),
);
```

Para revogar durante a página:

```js
window.dispatchEvent(
  new CustomEvent("fisiovet:marketing-consent", {
    detail: { granted: false },
  }),
);
```

Também existe `setMetaMarketingConsent` para código dentro do projeto. Somente booleano `true` permite tracking; outros valores revogam. Na configuração automática atual, não existe escolha de visitante persistida: recarregar a página volta ao modo automático configurado. Uma CMP real precisa controlar registro da escolha, restauração em cada documento, versão da política, cookies e revogação persistente. Não reapresentamos cliques passados após reativar. Uma nova autorização na mesma página não duplica PageView.

No Events Manager, conferir que correspondência avançada automática, regras/eventos automáticos e instaladores externos não estejam ativos para esta propriedade. O código não habilita essas opções; não é possível certificar configurações da conta Meta apenas pelo repositório.

## Validação local

```sh
npm ci
npm run lint
npm run build
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

Em outra máquina, instalar Chromium com `npx playwright install chromium` e executar `npm test` sem essa variável. Não há TypeScript nem script de typecheck. Build, lint e 36 testes passaram: 19 existentes e 17 novos, incluindo início automático, init/PageView únicos, oito CTAs em seis páginas, payload exato, mesmo evento nativo, middle click, mobile, revogação, campanhas com fbclid/UTM, URLs restritas, Pixel concorrente e navegação preservada sob bloqueio/exceções.

Nenhum evento de teste automatizado foi enviado à Meta: o SDK foi simulado e os destinos externos foram interceptados. Isso não confirma recebimento em Events Manager nem valida atribuição de anúncios.

## Meta Events Manager → Eventos de teste

1. Selecionar o Pixel `1431388415116120` → Eventos de teste → testar eventos do navegador. Abrir a URL publicada pela opção da Meta, em janela sem bloqueador. Não usar nomes, telefones ou informações clínicas na URL. Não é necessário colocar `test_event_code` na URL — ele pertence ao fluxo servidor.
2. Na abertura, esperar **um PageView**. Conferir Pixel/ID e uma única carga de fbevents em Network ou Meta Pixel Helper. Não há banner nesta configuração.
3. Clicar uma vez no WhatsApp. Confirmar **um Contact** com `content_name=whatsapp` e `content_category=veterinary_physiotherapy`. O WhatsApp deve abrir em nova aba com número e mensagem anteriores; não é necessário enviar mensagem para validar.
4. Repetir no celular pelo botão fixo e no desktop pelos CTAs. Um clique distinto gera um Contact. Navegar para outra página gera um PageView; navegar para seção da mesma página, scroll/hover, não gera outro evento.
5. Conferir um link de campanha com tokens, como `?utm_source=facebook&utm_campaign=campaign_42&fbclid=TEST_TOKEN`, em sessão de teste, sem afirmar que o token de exemplo testa atribuição real. Repetir com clique real do anúncio para testar a atribuição.
6. Não devem aparecer Lead/Schedule nem dados de correspondência avançada enviados por esta integração. Se houver duplicação, revisar instalações em GTM/Event Setup Tool/regras automáticas e histórico da conta.
7. Com bloqueador, a ausência de eventos pode ser esperada; o WhatsApp deve continuar funcionando.

## Deploy

A instrução inicial pedia somente branch; depois o responsável autorizou enviar para main e executar o deploy. O fluxo disponível é push de main para a integração Git/Netlify, se conectada. O repositório tem `netlify.toml`: Node 24, `npm run build`, publicação de `dist/`. Não há credencial de deployment Netlify fornecida ao ambiente. Push não é, por si só, prova de publicação concluída; conferir o deployment e o commit no painel Netlify quando a inspeção remota não estiver disponível.

Para publicação manual: integrar o commit revisado, executar lint/build/testes e publicar `dist/` pelo fluxo do responsável. O Pixel carregará automaticamente na versão publicada em contextos permitidos. Não substituir esse passo pelo envio de eventos reais nos testes automatizados.

Reutilizar o mesmo ID em outros sites exige configuração e revisão próprias de domínio/privacidade. Nenhum outro repositório foi alterado.
