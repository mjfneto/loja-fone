# Aula 005

## 005.001 Emmet no CSS é top mas box-sizing é mais

O botão "call to action" ("CTA") é um tipo de botão que precisa estar em destaque pois, geralmente, sua função é essencial para o marketing digital do website.

### A propriedade `line-height`

A propriedade `line-height` define o espaço usado pelas linhas, assim como em textos. Em elementos block, especifica a altura mínima das linhas das caixas dentro de um elemento. Em elementos inline não substituídos, especifica a altura a ser usada para calcular a altura da linha da caixa.

## 005.002 Variação no CSS

Há seletores de classe que podem contem regras de estilização gerais para elementos que compartilham de características similares. As variações de um tipo de elemento podem ser estabelecidas com um hífen (`-`) seguido do nome da variação, que deve definir o elemento segundo suas especificidades. Por exemplo. `class="button-store"` e `class="-cta"`.

### Variação com uso do seletor "e" (`.`)

Para especificar ainda mais a relação entre a classe mais geral e a classe mais particular, é aconselhável usar a seguinte seleção de classes no CSS `.button-store.-cta`. Isso determina a relação entre os dois, e, mais importante, que a regra de estilo vale somente para casos onde há ocorrência das duas atribuições no HTML. Isso evita que uma classe como `-second` seja usada em outros tipos de elementos, se isso não for o desejado.