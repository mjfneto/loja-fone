# Aula 004

## 004.001 Seletores de tag, id e class

Há três formas de selecionar elementos para fazer regras de seletores no CSS.

1. `id="value"` estabelece uma identidade única, um atributo de identificação única, com um valor atribuído entre aspas
    - Em CSS, há regra do seletor é o `#value {...}`

    - Não é uma boa prática usar dois `id`s com um mesmo valor em um documento.

2. `class="value"` estabelece uma classe de elementos que terão estilizações em comum. Qualquer elemento que tiver essa atribuição terá as estilizações em CSS relacionadas. A `class` não é limitada a uma tag específica, nem a um único elemento, sendo um atributo bastante flexível, que pode ser usado várias vezes.

3. seletor de tag: `div {...}`. É limitado a uma tag específica.

### A propriedade `clear`

A propriedade `clear` é diretamente relacionada a elementos float. Se o elemento pode caber horizontalmente no espaço próximo a outro elemento que também é float, ele irá. Contudo, se aplicarmos a propriedade clear nesse elemento na mesma direção em que está seu float, então o elemento se moverá para baixo do elemento float vizinho.

Quando não se quer que dois elementos que estão em contexto `float` fiquem ao lado um do outro, utiliza-se a propriedade `clear` no elemento que se deseja desalinhar.