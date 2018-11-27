# Aula 003

## 003.001 Valores mágicos do browser

**DICA:** Para tornar a verificação dos arquivos junto ao Developer Tools do seu navegador mais eficiente, principalmente quando se tem um arquivo com muitas linhas, um arquivo muito extenso, pode ser interessante usar o mecanismo de busca para chegar a uma linha específica:

- Verificar a linha da ocorrência na aba "Rules" do navegador e conferir o número da linha do seletor de regra (e.g. `reset.css: 6`). O número da linha é o número após o nome do arquivo, após os `:` dois pontos, ou seja, em nosso exemplo, `reset.css` é o nome do arquivo, e a propriedade em questão está na linha `6`.

  1. `ctrl` + `p` para abrir a navegação por linha;
  2. digitar no campo de busca `:<número da linha>`
  3. pressionar `Enter`

- O editor de texto deve levar você até a linha do seletor de regra desejado.

### O valor global `inherit`

A palavra-chave `inherit` ("herdar") determina que o elemento onde é especificada "herde" o valor *computado* da propriedade de seu elemento pai. **Pode ser aplicada a qualquer propriedade CSS**.

Ela é necessária quando é preciso "ultrapassar" outra regra.

#### Exemplo

1. A propriedade `inherit` pode ter algumas "anormalidades" na sua aplicação quando há mais de uma relação de parentesco entre os elementos.

2. Há regras de estilização (CSS) que são definidas pelos navegadores.

    ```markdown
    DICA: as regras de estilização definidas que os navegadores definem podem ser encontradas na aba "Computed" da janela à direita (a janela do CSS) do Developer Tools (tecla `F12` no teclado ou botão direito do mouse em qualquer parte da tela, clicando em `Inspecionar elemento`). Escondida, no canto direito, está a opção "Browser Styles". Basta marcá-la para ver as propriedades definidas pelo seu navegador.

    Usar o Developer Tools do seu navegador pode ser muito útil para verificar relações de herança entre elementos HTML estilizados.
    ```

3. Todo elemento âncora (`<a></a>`), porque é link, tem propriedades que são priorizadas pelo navegador, como `color: blue` e a sobrescrita `text-decoration: underline`; características comuns de links da web, certo?

4. Se um elemento pai, não direto, "avô", digamos, tiver uma propriedade, como `color: #fff`, por exemplo, o elemento "neto" terá a propriedade definida pelo navegador como prioridade, ou seja, será exibido na janela de exibição na cor azul e com a sobrescrita.

5. Para que ele consiga "herdar" as características, é preciso dizer ao navegador, estabelecendo a relação de herança com o avô, por exemplo, que o elemento neto herda isso dele `color: inherit`. Isso fará com que o elemento âncora tenha a cor `#fff`.

### **Por que saber isso é útil?**

Porque usar o `inherit` para estabelecer relações de herança pode deixar seu código mais limpo e com menos código.

## 003.002 font-family é top

A propriedade `font-family` define a família de fonte do(s) elemento(s) selecionado.

```css
h1 {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
}
```

A propriedade `font-family: Arial, Helvetica, sans-serif`, com esses valores, especifica que:

- se o usuário não tiver Arial na máquina dele, o navegador pode usar Helvetica;

- E, por fim, se o usuário não tiver Helvetica, o navegador usará sans-serif.

```markdown
Serifas são aqueles pequenos traços e prolongamentos nas hastes das letras, visto com frequência em fontes como a Times New Roman, que portanto é uma fonte Serifada.

Desta forma as fontes chamadas Sans-Serif, ou seja, sem serifa, são aquelas que não possuem esses traços e alongamentos. Um exemplo é a Arial.
```

É sempre bom se resguardar contra a ausência de fontes no computador do usuário, fazendo a seleção de outras fontes, como no exemplo acima.

```markdown
Você pode verificar fontes proprietárias no [Google Fonts](fonts.google.com)
```

O Google Fonts também oferece mais opções de fontes, com diferentes estilos de uma mesma fonte. Mas, cuidado, muitos estilos no seu documento comprometerão a performance do seu site.

É recomendado usar até três estilos de fonte, porque é um limite para o começo de efeitos no carregamento da página.

Na aba "EMBED" do Google Fonts você pode encontrar a tag HTML link, que contém as suas especificações da fonte escolhida, e a propriedade `font-family` já com os respectivos valores.

Use esse link no seu arquivo HTML, dentro da tag `<head></head>`, antes dos outros links `reset.css` e `header.css`.