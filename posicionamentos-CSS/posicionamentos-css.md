# Pare de chutar e aprenda como funciona o `display: inline`

Disponível em: [https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-4ccb7b77371d]()

## `Display: inline;`

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

