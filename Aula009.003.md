# Aula 009

## 009.002 Básico de HTTP e HTTPS

### O que é um protocolo HTTP (HyperText Transfer Protocol)

|     Cliente    |   Servidor   |
| :------------: | :----------: |
| **Requisição** | **Resposta** |

O protocolo HTTP foi criado com o propósito de trafegar documentos HTML na web, e é muito bom para isso.

A Web se comunica por _endereços IPs_, que são conjuntos de números.

_Stateless_: cada transferência é totalmente independente. Cliente e servidor só entram em contato durante a requisição atual. Quando essa é fechada, é preciso prover nossa informação sobre cliente/servidor, e é feita uma nova conexão.

- Depois de uma requisição, o cliente se desconecta do servidor, então, quando a resposta está pronta, o servidor restabelece a conexão e entrega a resposta.

- O HTTP pode entregar qualquer tipo de dado, desde que os dois computadores sejam capazes de lê-los.

O ciclo requisição/resposta funciona pela web através de mensagens HTTP.

Uma mensagem HTTP contém três seções, a linha de início, os cabeçalhos e o corpo.

### Como é feita a identificação do IP de um domínio

Durante a requisição, há o contato com um servidor, chamado DNS. Essa máquina tem a relação de todos os domínios com respectivos IPs.

O padrão HTTP envolve até cinco máquinas até a chegada no servidor. Isso contribui para a segurança dos protocolos.

Em um endereço, o que vem depois do **_domínio_** é o **_caminho/path/recurso_**. Representa um desdobramento de um ponto de acesso no servidor.

Há ainda a representação de recursos específicos, chamada de **_query string_** que tem seu início sinalizado com um sinal de interrogação `?`:

Por exemplo:

```markdown
http://facebook.com/marco.bruno.br/posts?id=1&text=true
<!-- http://domínio.com/path/caminho/recurso?re=c&urso=especifico -->
```

### Protocolo HTTPS (HTTP + SSL)

SSL (Secure Socket Layer)

É um protocolo seguro em relação ao HTTP. O HTTP não tem nenhum tipo de criptografia.

Contexto: é possível que dados sejam colhidos por terceiros na transição da requisição para a resposta.

O protocolo HTTPS veio como resposta ao cenário acima.

Na resposta é gerada uma chave pública. Essa chave consegue gerar dados criptografados, mas não consegue descriptografá-los.

O servidor tem uma chave que pode descriptografar.

### SSH

