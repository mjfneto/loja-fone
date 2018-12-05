# Aula 008

## 008.001 Affordance, um pouco de UX

Um _affordance_ pode ser útil na experiência do usuário (UX).

Está na área de _usability_.

Duas análises existem para saber se um elemento tem um bom _affordance_:

- se é fácil de ser usado

- se é intuitivo (entendimento consistente)

Designs simples não deveriam ser associados a marcas ou a manuais longos e complicados.

Se um erro é cometido no processo, o efeito deve ser reversível.

_Affordance_ tem a ver com o que a coisa proporciona ao usuário, trata da relação entre o objeto e o sujeito. _Propriedades_ de um lado, _habilidades_ do outro.

Modelos conceituais (intuição sobre o que é a coisa).

Significantes (indicam efeitos, direções).

Pessoas buscam pistas diante de diferentes contextos. Logo, significantes são dispositivos de comunicação que avisam quando fazer e como fazer.

|         |   Entendimento    |  Entendimento   |
| :-----: | :---------------: | :-------------: |
| **Uso** | **_Fácil/Fácil_** |  Fácil/Difícil  |
| **Uso** |   Difícil/Fácil   | Difícil/Difícil |

A análise do _affordance_ precisa ter em conta o ambiente, o momento, o perfil do usuário, e outros detalhes. Trazer o mundo real para o mundo digital.

### `cursor: pointer`

A propriedade `cursor: pointer` cria um significante que indica o efeito de interação de que o usuário pode clicar no elemento da página para gerar um efeito, geralmente um link.

## 008.002 Mundo real dentro do sistema

[Jakob Nielsen (10 heurísticas)](https://brasil.uxdesign.cc/10-heur%C3%ADsticas-de-nielsen-para-o-design-de-interface-58d782821840)

### Pseudo-classe

Seletor que existe somente diante de um evento.

## 008.003 Coração no lugar certo

A aula tratou basicamente do posicionamento da imagem com o coração fazendo uso da propriedade `position: absolute`.

## 008.004 Desafios

### Básico

Fazer interação com a imagem do coração, e com as imagens da estrelas.

- Meu plano de ação: Fazer com que elas cresçam um pouco configurando a pseudo-classe `:hover` com `transform: scale(0.9)`.

### Intermediário

Adicionar interação aos elementos da `<nav>`.

- Meu plano de ação: pseudo-classe `:hover` com propriedade `border-bottom: 1px solid #fff`.

### Avançado

Melhorar a interação dos elementos da `<nav>`. Fazer com que a linha abaixo deles surja da esquerda quando houver `:hover`.

Meu plano de ação: com a propriedade `transform`. Ver qual especificação usar.
