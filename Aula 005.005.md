# Aula 005

## 005.001 Emmet no CSS é top mas box-sizing é mais

O botão "call to action" ("CTA") é um tipo de botão que precisa estar em destaque pois, geralmente, sua função é essencial para o marketing digital do website.

### A propriedade `line-height`

A propriedade `line-height` define o espaço usado pelas linhas, assim como em textos. Em elementos block, especifica a altura mínima das linhas das caixas dentro de um elemento. Em elementos inline não substituídos, especifica a altura a ser usada para calcular a altura da linha da caixa.

## 005.002 Variação no CSS

Há seletores de classe que podem contem regras de estilização gerais para elementos que compartilham de características similares. As variações de um tipo de elemento podem ser estabelecidas com um hífen (`-`) seguido do nome da variação, que deve definir o elemento segundo suas especificidades. Por exemplo. `class="button-store"` e `class="-cta"`.

### Variação com uso do seletor "e" (`.`)

Para especificar ainda mais a relação entre a classe mais geral e a classe mais particular, é aconselhável usar a seguinte seleção de classes no CSS `.button-store.-cta`. Isso determina a relação entre os dois, e, mais importante, que a regra de estilo vale somente para casos onde há ocorrência das duas atribuições no HTML. Isso evita que uma classe como `-second` seja usada em outros tipos de elementos, se isso não for o desejado.

## 005.003 Seletores de class são felizes

Seletores de classe bem definidos são boas práticas para refatoração de código. Facilitam a manutenção dele.

## 005.004 O show do HTML com Emmet

Quando houver uma área de um layout que guarda elementos diferentes níveis e sub-níveis de descrição de determinada coisa, uma tag chamada "description list" `<dl></dl>` pode ser útil, pois cumpre exatamente o propósito de representar uma lista descritiva. Delimita uma lista de grupos de termos (especificados com o elemento `<dt></dt>`) e descrições (dados pelos elementos `<dd></dd>`). Todas as tags `<dl></dl>`, `<dt></dt>` e `<dd></dd>`, por padrão, têm contexto block.

## Criando elementos e fazendo atribuições eficientemente com o plugin Emmet

```emmet
dl>dt>dd*3
```

```html
<dl>
    <dt>
        <dd></dd>
        <dd></dd>
        <dd></dd>
    </dt>
```

```emmet
button.button-store-second{...}
```

```html
<button class="button-store-second">Adicionar ao carrinho</button>
```

## 005.005 Desafios

### Desafio básico

Estilizar os elementos descritivos do fone de ouvido segundo o layout.

### Desafio Intermediário

Posicionar os botões um ao lado do outro.

### Desafio Avançado

Colocar a imagem ao lado do `<dl></dl>`.