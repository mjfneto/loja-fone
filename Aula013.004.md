# Aula 013

## 003 "Nossa primeira linha de JavaScript"

### Boa Prática de JavaScript

O cifrão ($) prefixado a uma variável em JS indica que se trata de uma seleção de um elemento originário do documento HTML. Isso oferece mais legibilidade ao código.

```JavaScript
// Exemplo de boa prática
const $heart = window.document.querySelector(".-heart");
```

## 004 "JavaScript e API do Browser"

API são recursos do browser que são acessados através de uma linguagem de programação (JavaScript, por exemplo). Assim se dá a comunicação com o browser.

## 005 "addEventListener é top top top"

Evento é qualquer ocorrência no browser.

## 006 "Desafios"

### Básico

Selecionar o botão "Adicionar no carrinho" e "logar" ele no console.

### Intermediário

Adicionar um ouvinte de evento (click) que invoca uma função que exibe um alert("aê").

### Avançado

Modificar o ouvinte de evento (click) para que invoque uma função que mude o texto do elemento `<a>` "Carrinho (10)" para "Carrinho (11)".