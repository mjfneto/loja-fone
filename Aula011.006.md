# Aula 011

## 011.004 Não é bug, é valor de especificidade

A ordem de leitura é a ordem de prioridade.

O seletor posterior sobrescreve o anterior, se dois seletores CSS forem aplicados a um mesmo elemento; o mais específico ganha.

[CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

seletor de id = 100
seletor de class / pseudo-seletores = 10
seletor de tag = 1

**Evitar ao máximo o uso do `!important`.**

## 011.006 Desafios

### Básico

Cuidar do respiro entre o conteúdo principal e o cabeçalho responsivamente.

## Intermediário

Fazer o background em gradiente.

## Avançado

Encontrar uma resposta, ou solução, para o problema da visualização em modelo responsivo por outros navegadores, como o Chrome, por exemplo.