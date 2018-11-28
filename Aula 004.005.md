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

## 004.003 Arrumando nosso pequeno CSS

Padrão para refatoração do nosso layout:

- Troca dos seletores de tag por seletores de classe.

- Um contêiner, um elemento pai, terá a nomeação de classe em duas palavras. Exemplo: `class="header-store"`

- Os componentes de todo contêiner terão a nomeação com apenas uma palavra. Exemplo: `class="title"`

```markdown
Observação: não pode haver dois atributos `class` dentro de uma tag de um elemento.
```

## 004.004 position: absolute e porcentagem

A propriedade `position: absolute` com esse valor cria um novo contexto que sai do fluxo normal de posicionamento de elementos.

Um elemento com um contexto da propriedade `position: absolute` é posicionado relativamente ao ancestral posicionado mais próximo (ao invés do seu poscionamento relativo ao viewport, como é com o caso do valor `fixed`).

Contudo, se um elemento posicionado absolutamente não tem ancestrais posicionados, ele usa o documento `<body></body>`, e se move segundo a rolagem da página.

O que define o dimensionamento de um elemento posicionado absolutamente é o dimensionamento de seu conteúdo.

### Coordenadas

Disponível em: [Propriedade Position do CSS](https://tableless.com.br/propriedade-position-do-css/), do site Tableless

```markdown
O Position é uma propriedade perigosa para iniciantes. Normalmente o desenvolvedor que acaba de conhecer essa propriedade, acha que ela é a resposta para todos os problemas de posicionamento e diagramação de layout. Pelo contrário. O Position não serve para diagramar a estrutura de layouts. Para isso, você utiliza a propriedade float do css. O Position vai servir para fazer coisas mais simples.
```

Para posicionar seus elementos, você precisa inserir uma coordenada. Essas coordenadas são comandadas pelas propriedades: top, left, right ou bottom. Todos os valores de positions só trabalham com essas coordenadas. Obviamente, se você definir um left para o seu elemento, não faz sentido definir um right.

    ```css
    div {
    position: absolute;
    top: 150px;
    left: 150px;
    }
    ```

### Position Relative

Todos os positions precisam de um ponto para iniciar o cálculo da coordenada para assim posicionar o elemento na tela. Ao contrário do que muitos acham, esse ponto não é o ponto central do elemento, o ponto base é o canto superior esquerdo do elemento. A partir deste canto, o browser irá calcular a coordenada que você definiu e irá posicionar o elemento no viewport.

O position relative posiciona o elemento em relação a si mesmo. Ou seja, o ponto zero será o canto superior esquerdo, e ele começará a contar a partir dali.

### Position Absolute

O Position Absolute é um tanto diferente do Relative. Enquanto o elemento com Position Relative utiliza seu próprio canto para referenciar sua posição, o elemento com Position Absolute se utiliza do ponto superior esquerdo de outros elementos. Estes elementos são os parentes dele do elemento com position absolute. Mais especificamente o pai.

### Unidades Relativas

A unidade `%` é totalmente adaptativa ao tamanho da janela de exibição. Isso é uma característica da responsividade.

### A propriedade `transform: translateX()`

```markdown
CSS 2D Transforms allow elements rendered by CSS to be trans-formed in two-dimensional space.
```

A propriedade transform irá modificar a forma do elemento.

A propriedade `transform: translateX()` pode mover o elemento segundo seu eixo. Então, a referência para os valores da propriedade serão sempre o elemento.

### Usando as propriedades `position: absolute` e `transform: translateX()` para centralizar um elemento em relação a seu elemento pai

```html
<body>
        <header class="header-store">
            <h1 class="title">LOGO</h1>

            <nav class="navigation">
                <a class="action" href="http://collabcode.training">Produtos</a>
                <a class="action" href="http://collabcode.training">Serviços</a>
                <a class="action last" href="http://collabcode.training">Carrinho (10)</a>
            </nav>
        </header>

        <a class="action button" href="/comprar.html">Adicionar no carrinho</a>
        <a class="action button" href="/comprar.html">Comprar</a>
    </body>
</html>
```

```css
.header-store {
    background-color: #e24647;
    color: #fff;
    overflow: hidden;
    padding: 55px 60px 95px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
```

## 004.005 Criando o contêiner

Um elemento contêiner pode conter todos os elementos semânticos do nosso layout, porque ele é irrisório na leitura de leitores de texto. Portanto, ele pode ser usado para centralizar nossos outros elementos no centro.

- Cria-se uma nova pasta para os elementos container, que também recebem uma nomeação com duas palavras. Exemplo: `class="container-store"`

```html
<body>
    <div class="container-store">
        <header class="header-store">
            <h1 class="title">LOGO</h1>

            <nav class="navigation">
                <a class="action" href="http://collabcode.training">Produtos</a>
                <a class="action" href="http://collabcode.training">Serviços</a>
                <a class="action last" href="http://collabcode.training">Carrinho (10)</a>
            </nav>
        </header>

        <a class="action button-store" href="/comprar.html">Adicionar no carrinho</a>
        <a class="action button-store" href="/comprar.html">Comprar</a>
    </div>
</body>
</html>
```

```css
.container-store {
    background-color: #e24647;
    width: 80%;
    padding: 55px 60px 95px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
```

Agora, a tag `<div></div>` contêiner possui todos os elementos da nossa store.