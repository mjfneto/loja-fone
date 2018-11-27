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

## 004.002 O mundo do display

```markdown
**DICA:** Uma quantidade grande de arquivos com diferentes partes do projeto facilita a manutenção deles.
```

A propriedade `display` permite que se defina a maneira como determinado elemento HTML deve ser renderizado.

- A propriedade `display: inline` com esse valor faz com que o elemento HTML seja renderizado inline, dentro do bloco na _mesma linha_. Quando o elemento encontra-se entre dois blocos ele forma o chamado 'bloco anônimo' e é renderizado com a menor largura possível.

  - Elementos inline não podem ter dimensionamento, ou seja, não podem ter altura, nem largura, definidos.

- A declaração `display: block` faz com que o elemento HTML seja renderizado como bloco, tal como os parágrafos e os cabeçalhos o são. Um bloco contém um espaço em branco tanto em cima como embaixo e não permite outros elementos HTML ao lado, exceto quando tiver sido declarado ao contrário (por exemplo, declarar a propriedade `float` para o elemento próximo ao bloco).

  - Elementos bloco podem ter dimensionamento, podem ter altura e largura definidos.

- A propriedade `diplay: inline-block` com esse valor coloca um elemento em contexto inline (ou seja, na mesma linha do conteúdo adjacente), mas comporta-se como se fosse um bloco.

  - Um elemento em contexto inline-block tem as características e os comportamentos dos dois contextos.

  - Na prática, usamos o valor `inline-block` quando queremos definir um valor para a propriedade `width`. Sob certar circunstâncias, alguns navegadores ignoram a propriedade `width` para elementos inline, então definindo `display: inline-block` para tais elementos você forçará o navegador a reconhecer o valor definido para a propriedade `width`.

## Arrumando nosso pequeno CSS

Padrão para refatoração do nosso layout:

- Troca dos seletores de tag por seletores de classe.

- Um contêiner, um elemento pai, terá a nomeação de classe em duas palavras. Exemplo: `class="header-store"`

- Os componentes de todo contêiner terão a nomeação com apenas uma palavra. Exemplo: `class="title"`

```markdown
Observação: não pode haver dois atributos `class` dentro de uma tag de um elemento.
```

