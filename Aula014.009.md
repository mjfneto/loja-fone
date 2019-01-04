# Aula 14

## 004 "Aprendendo a soma de forma feliz

### Incrementando/decrementando (dica)

Quando se incrementa um valor, há a forma simplificada `++`, por exemplo. Duas possibilidades diferentes de escrita dessa simplificação produzem resultados diferentes:

```JS
var incremented = 1;
var element = document.querySelector('.classname');
element.addEventListener("click", function(){
    element.textContent = incremented++
    // Isso produzirá o comando que indica que, primeiro, deve ocorrer a modificação do conteúdo textual do element para o valor de incremented, e, a partir da segunda ocorrência, as incrementações devem começar.
});;

```

```JS
var incremented = 1;
var element = document.querySelector('.classname');
element.addEventListener("click", function(){
    element.textContent = ++incremented;// Já essa expressão indica que a incrementação deve ocorrer já na primeira ocorrência
});;

```

### Template strings

Há formas mais legíveis de literais string que permitem expressões embutidas, são as _template strings_. Template strings são envolvidas por acentos graves (``` ` ` ```) em vez de aspas simples ou duplas. Template strings podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves (${expression}). As expressões nos placeholders, bem como o texto em volta delas são passados a uma função. A função padrão apenas concatena as partes em uma string única.  Se existir uma expressão precedendo a template string (função tag exemplo),  a template string é definida como "_tagged template string_". No caso, a expressão tag (geralmente uma função) é chamada pela template string processada, que você pode manipular antes de produzir o resultado.

#### Sintaxe

```JS
`corpo de texto`

`texto linha 1
 texto linha 2`

`texto string ${expression} texto string`

tag `texto string ${expression} texto string`
```

#### Strings multi-linhas

Qualquer caracter de nova linha inserido no código é parte da template string. Utilizando strings normais, você teria de usar a síntaxe a seguir para obter strings multi-linhas:

```JS
console.log("texto string linha 1\n\
texto string linha 2");
// "texto string linha 1"
// "texto string linha 2"
```

Para obter o mesmo efeito com strings multi-linhas, você agora pode escrever:

```JS
console.log(`texto string linha 1
texto string linha 2`);
// "texto string linha 1
//  texto string linha 2"
```

#### Interpolação de expressões

Para encapsular expressões dentro de strings, você precisava utilzar a seguinte síntaxe:

```JS
var a = 5;
var b = 10;
console.log("Quinze é " + (a + b) + " e não " + (2 * a + b) + ".");
// "Quinze é 15 e não 20."
```

Agora, com template strings, você pode utilizar as substituções sintaticas tornando o código mais legível:

```JS
var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e não ${2 * a + b}.`);
// "Quinze é 15 e não 20."
```

## 009 Desafios

### Básico

Tentar arrumar o "bug" do elemento "-heart". Fazer com a cor de fundo branca não "ultrapasse" as linhas da imagem do coração.

### Intermediário

Selecionar as estrelas, fazendo com que após a ocorrência dos eventos, elas fiquem sem preenchimento.

### Avançado

Fazer com que a estrela alvo do evento seja referência para o preenchimento das que estão à esquerda.