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