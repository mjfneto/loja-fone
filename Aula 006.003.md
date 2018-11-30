# Aula 006

## 006.001 Seletores filhos e filhos diretos do CSS

### Boas práticas de seleção de regras

Para deixar mais claro a relação entre seletores de regras em CSS, é recomendado especificar se o parentesco entre os elementos do bloco é direto ou indireto. Isso pode ser feito com os seguintes seletores:

```css
.header-store > .navigation {
    font-size: 20px;
}
<!-- O sinal ">" especifica que a regra de estilização só se aplica aos elementos da classe .navigation que são filhos diretos de um elemento da classe .header-store -->
```

**Fazer isso é uma boa prática porque aumenta a performance com a qual o navegador lê o código. Com o sinal indicando especificamente a relação, a identificação da regra é facilitada. Além disso, essa especificação facilita a manutenção do código.**

Outra especificação recomendada é a utilização de um espaço entre os atributos para demarcar a relação de parentesco. Essa especificação é um pouco mais abrangente, porque significa que é uma relação de qualquer elemento que esteja no escopo do elemento pai:

```css
.description-product .action {
    font-size: 20px;
}
```

## 006.002 Colocando em prática o conhecimento

### Observações importantes sobre estilização de conteúdo com CSS

- Alguns leitores lerão a marcação direta do HTML, se o conteúdo estiver em maiúsculas, como se leria uma sigla. Por exemplo, "LOGO" seria lido "L"-"O"-"G"-"O", e não "Lo"-"go". Esse é um detalhe importante, porque conta positivamente na acessibilidade de um site.

- SEO (Search Engine Optimization); colocar marcação com as letras em caixa baixa é importante para facilitar a identificação por motores de busca, como o Google.com, por exemplo. A priorização destes motores é dada com a leitura do documento. Isso conta positivamente na visibilidade de um site.

Portanto, é recomendando deixar a estilização do conteúdo para a linguagem CSS. No caso do nosso exemplo acima, o recomendado seria:

```css
.header-store > .title {
    text-transform: uppercase;
}
```

Outro detalhe importante é a utilização de tags específicas para priorização, como a `<strong></strong>`, que definem que o conteúdo delas tem algum tipo de destaque, de prioridade.

### Espaçamento e alinhamento entre mais de um conteúdo de texto tabular de elementos block, sendo que um deles tem destaque.

1. Definir uma largura comum para os elementos;

2. Especificar `text-align: justify`.

3. Utilizar `float: left` no elemento que tem a tag de destaque.

## 006.003 inherit é muito top

