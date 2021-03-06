# Posts sobre propriedades de posicionamento CSS

Disponíveis em: [https://medium.com/collabcode/pare-de-chutar-e-aprenda-as-propriedades-css-de-posicionamento-603154655121]()

## Pare de chutar e aprenda como funciona o `display: inline`

Disponível em: [https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-4ccb7b77371d]()

### `Display: inline;`

Todo elemento em contexto inline tem o *comportamento de uma palavra*.

Quando damos um [ENTER] para separar as palavras dentro do <h1>, essa quebra de linha não acontece no navegador pois ele troca o [ENTER] que está no código por um [SPACE].

O espaço entre as tags <li> existe pelo mesmo motivo que temos os espaços entre as palavras que o <h1> contém.

### Como fazer para tirar os espaços entre tags que estão em contexto inline

É só tirar o [ENTER] que está separando os elementos. Desta forma, nós transformaremos as três tags em uma palavra.

Uma maneira utilizada para remover os espaços tentando deixar o código um pouco mais elegante e mais fácil de ler, é utilizando comentários em vez de deixar as tags na mesma linha. Veja como o código deve ficar com os comentários:

```html
<ul class="example">
    <li class="example-item example-item_first">Primeiro</li><!--
 --><li class="example-item example-item_second">Segundo</li><!--
 --><li class="example-item example-item_third">Terceiro</li>
  </ul>
```

## Pare de chutar e aprenda como funciona o `display: block`

### A ajuda na manutenção que o valor `auto` dá

A utilização do valor `auto` com a propriedade margin, por exemplo, facilita bastante a manutenção do código. Diferentemente da utilização de valores em porcentagem, com o valor `auto` o cálculo da margem é feito automatica, sendo mais adaptativo.

Utilizar porcentagens garante um efeito responsivo à largura dos elementos, mas não facilita a manutenção se quisermos mudar a largura para outro valor:

```css
.example {
    color: #FFF;
    text-align: center;
}
    .example-item {
        display: block;
        width: 33.333%;
        height: 150px;
    }
    .example-item_first {
        background-color: #FAA116;
    }
    .example-item_second {
        background-color: #57C7C3;
        margin-left: 66.667%;
    }
    .example-item_third {
        background-color: #3B97D3;
    }
```

O código abaixo tem o mesmo efeito que o de cima, mas sua vantagem é a facilitação da manutenção:

```css
.example {
    color: #FFF;
    text-align: center;
}
    .example-item {
        display: block;
        width: 33.333%;
        height: 150px;
    }
    .example-item_first {
        background-color: #FAA116;
    }
    .example-item_second {
        background-color: #57C7C3;
        margin-left: auto; // Só trocamos 66.667% por auto
    }
    .example-item_third {
        background-color: #3B97D3;
    }
```

## Pare de chutar e aprenda como funciona o `display: inline-block`

Com display: inline-block nós conseguimos definir uma largura (width) e altura (height) da mesma forma que conseguimos com o display: block, esse é o único comportamento que o inline-block herda do block.

Também conseguimos deixar um elemento do lado do outro, vulgo mesma linha,da mesma forma que fazemos com o display: inline, mas esse não é o único comportamento que o inline-block herda do inline.

Quando um elemento é definido como display: inline-block ele também ganha o comportamento de uma palavra, esse é o segundo comportamento que herdamos do display: inline. Vamos alterar um pouco o nosso CSS e HTML para entender um pouco melhor o que eu quero dizer com comportamento de uma palavra.

### Pai com `text-align: justify` e pseudo-elemento

O comportamento do justify, é justificar todas as linhas menos a última?

Como temos apenas uma linha, ela é a primeira e também a última, por isso que ela não está justificada. Para resolver esse problema precisamos adicionar uma última linha e fazer com que ela não apareça para o usuário.
Felizmente conseguimos fazer isso apenas com CSS, utilizando o seletor de pseudo-element `:after`.

É isso aí conseguimos adicionar texto pelo CSS -- só faça isso se o texto que você for adicionar, é apenas um atrativo visual. Conteúdo tem que ficar no HTML.

Agora precisamos que esse último elemento que adicionamos com o :after, seja também a última linha. Bom, para fazermos isso, precisamos definir a largura dele como 100% (width: 100%) e por segurança deixá-lo com a altura zerada (height: 0). Também precisamos alterar o display dele para inline-block porque o padrão dele é inline -- lembre-se que quando um elemento é display: inline nós não conseguimos definir largura (width) e nem altura (height) para ele.

```css
.example {
    color: #FFF;
    text-align: justify;
}
.example:after {
    content: '';
    color: red;
    display: inline-block;
    width: 100%;
    height: 0;
}
    .example-item {
        width: 25%;
        height: 150px;
        display: inline-block;
    }
    .example-item_first {
        background-color: #FAA116;
    }
    .example-item_second {
        background-color: #57C7C3;
    }
    .example-item_third {
        background-color: #3B97D3;
    }
```

## Pare de chutar e aprenda como funciona o float: left e float:right e sua trupe

Toda vez que tivermos um <img> ou um elemento definido com display: inline ou display: inline-block após qualquer tag definida com a propriedade float: left ou float: right, esses elementos se encaixam ao lado do elemento que está flutuando. Se <img> ou o elemento com display: inline ou display: inline-block não couber ao lado do elemento que está flutuando, ele fica embaixo do elemento que contém a propriedade float.

Se colocarmos elementos com a propriedade float: left e float: right a partir desse momento esses elementos ganham um novo contexto, ou seja, eles não estarão no mesmo contexto de seu pai (tag <article>).

### A propriedade `overflow: hidden`

A propriedade overflow com o valor hidden, tem o poder de esconder qualquer elemento filho que ultrapasse o tamanho do seu pai.
Mas quando o pai não tem largura ou altura definida, ele se preocupa em levar em consideração a altura e largura dos filhos, ainda que estes estejam no novo contexto.

### Como funciona a propriedade clear

A propriedade clear é utilizada para limpar o contexto caso tenha um elemento flutuando ao lado esquerdo (left), direito (right) ou ambos (both).

## Pare de chutar e aprenda como funciona a `position: static` e `position: relative`

Junto com a propriedade `position` podemos utilizar mais 4 propriedades: `top`, `right`, `bottom` e `left`.

Sem `position` definida, o browser deixa o valor padrão que é `static`, e o `static` é exatamente algo que não se move, algo totalmente parado sendo assim não adianta nós tentarmos utilizar as propriedades: `top`, `right`, `bottom` e `left`.

### A propriedade `z-index`

![z-index](https://cdn-images-1.medium.com/max/1000/1*FtQBdhqLsh_bgFP9AmjS-g.png)

Uma coisa interessante sobre essa propriedade é que ela só funciona se a propriedade position do elemento tiver um valor diferente de static.

O valor padrão do z-index é 0.

## Pare de chutar e aprenda como funciona a `position: absolute`

Um elemento com `position: absolute` ficará posicionado em relação ao elemento pai posicionado mais próximo.

Se o pai de um elemento posicionado absolutamente estiver posicionado estaticamente, como no fluxo normal, ele ignorará o filho.

Sendo assim, o filho sem uma referência se baseia no body, pode ser centrelizado em relação a ele:

```css
.elementExample_second {
  background-color: #00b894;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

Contudo, se o elemento pai estiver posicionado relativamente, ele está num contexto onde pode ser referência de posicionamento para seu filho. O elemento filho, então, passa a ser centralizado em relação ao elemento pai, limitando-se à área acima do seu dimensionamento interno.

```css
.elementExample_last {
  background-color: #d63031;
  position: relative;
}
.elementExample-internal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: #00cec9;
}
```