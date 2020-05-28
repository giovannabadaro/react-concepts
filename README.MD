# Conceitos React JS :rocket:

> Este projeto não está utilizando o comando `create-react-app`

### Como rodar o projeto :round_pushpin:
1. Certifique-se que possui o node devidamente instalado em sua máquina. heheheh :trollface:
2. Clone o projeto
3. execute o comando abaixo na pasta do projeto

      `$ yarn install `

### Vamos aos conceitos :dart:

BABEL: transpilador de código JS, ou seja, ele vai converter todo o código react em um código que o navegador entenda

WEBPACK:  Como tem como carregar arquivos do tipo .js .png .css dentro do JS, o babel não consegue converter isso, então fica para o papel do webpack converter cada tipo de uma maneira diferente. Por isso dentro do conceito de webpack, existe um conceito chamado de loaders: 

Os**loaders estão dentro do webpack,** temos então: 

- babel-loader
- css-loader
- image-loader

**PROPRIEDADES:**

Children —> o conceito de children é quando eu quero acessar conteúdo HTML adicionado dentro do componente 

```jsx
function Component ({ children }){
	return (
		.
		.
		{ children } // aqui você consegue vizualizar todo o conteúdo adicionado
								// ao componente pai
	);
}
.
.
```

```jsx
//JSX

<Header> 
	<h1> Esse conteúdo </h1>
	<h2> Pode ser acessado através </h2>
	<h3> da propriedade children, vista acima </h3>
</Header>

```

**ESTADOS:**

As variáveis do React são imutáveis (não podem ser alteradas e devem ser recriadas), ou seja, não tem como você mudar uma variável que já existe, por exemplo, você precisa recriar a variável com a nova informação que você quer passar. 

Com isso, usamos um hook que se chama useState, e ele funciona da seguinte forma: 

Você importa ele junto ao React, da seguinte forma:

```jsx
import React, {useState} from 'react'
```

E então, você pode usar da seguinte forma: 

```jsx
//dentro de um função JS
.
.
const [state, setState] = useState(false);
```

A função useState vai retornar um array com duas posições

1. Um array contendo o estado inicial, ou seja, o que por exemplo já esta escrito naquele array naquele momento —> state
2. Outro array contendo uma função para adicionarmos outro estado —> setState

**UseEffect:**

Ele recebe dois parâmetros

1. Qual função eu quero disparar;
2. Quando eu vou disparar;

```jsx
useEffect((params) => {
	função que quero disparar
},[quando eu quero disparar])
```

Se eu deixar o segundo parâmetro vazio, quer dizer que assim que o componente dor exibido em ela tela, ela sera disparada.