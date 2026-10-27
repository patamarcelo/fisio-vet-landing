# Identificação de Instagram pago pela mensagem do WhatsApp

A UTM atual do anúncio pode continuar como está:

```text
utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign=eduarda_fisioterapia_poa&utm_content={{ad.id}}
```

A Meta deve substituir as variáveis ao servir o anúncio. O site reconhece **`utm_source=ig` e `utm_medium=paid_social`**. Não usa referrer ou `fbclid` isolado para adivinhar Instagram, nem classifica Facebook (`fb`), Messenger (`msg`) ou Audience Network (`an`) como Instagram.

## Como reconhecer na conversa

- Normal: `Olá! Vim pelo site e gostaria de mais informações sobre o atendimento de fisioterapia veterinária domiciliar para meu pet.`
- Instagram pago: `Olá! Gostaria de mais informações sobre o atendimento de fisioterapia veterinária domiciliar para meu pet. Vim pelo site.`

A marca é **`Vim pelo site.` como frase separada depois do pedido**, em vez de `Vim pelo site e...` no começo. Não acrescenta nome da rede, códigos, emojis invisíveis, IDs ou UTMs à mensagem. O hero mantém o assunto específico da página. No CTA de bairro, a frase fica antes de `Meu bairro/cidade é: ` para deixar o campo de preenchimento por último.

Aplica-se aos oito pontos de WhatsApp, inclusive ao fixo mobile, sem alterar número, abertura em nova aba, GA4 ou o payload de Contact do Meta Pixel.

## Duração e limites

Uma classificação booleana é guardada em `sessionStorage` na mesma aba, para sobreviver à navegação entre páginas e recarregamentos. Não armazena o conteúdo das UTMs nem ID do anúncio. Uma nova UTM explícita que não corresponda a Instagram pago limpa a classificação; acesso interno sem UTMs a mantém. Não usa localStorage ou cookie de longa duração. Se o armazenamento estiver bloqueado, funciona apenas no documento atual e falha sem interromper o WhatsApp.

O HTML pré-renderizado mantém as mensagens normais; React atualiza os hrefs após a hidratação sem gerar mismatch. Sem JavaScript não há identificação de origem.

É um indicativo, não prova de origem ou conversão: visitantes podem editar a mensagem, compartilhar URLs ou manter a aba aberta e voltar por outro caminho. Não permite identificar o anúncio específico pela conversa — `utm_content` não é codificado no texto.

## Teste manual

Abrir em uma aba/sessão nova:

```text
https://duda.fisiovet.app/?utm_source=ig&utm_medium=paid_social&utm_campaign=eduarda_fisioterapia_poa&utm_content=123456789
```

O botão fixo deve abrir a mensagem de Instagram pago. Navegar a outra página e repetir: a origem deve permanecer. Em outra sessão limpa, abrir sem UTM: a mensagem normal deve ser usada. Na mesma aba do teste pago, abrir `?utm_source=fb&utm_medium=paid_social`: a mensagem volta ao padrão, inclusive depois de navegar internamente.
