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

