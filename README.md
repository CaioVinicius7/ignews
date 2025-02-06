<h1 align="center"> 
	Ignews
</h1>

## 💭 O que é e qual a ideia do projeto?

Esse é o terceiro projeto da trilha de react do ignite de 2021 da [Rocketseat](https://www.rocketseat.com.br/), o projeto se trata de um blog de artigos sobre React, onde o usuário pode logar com seu github e fazer um assinatura mensal para ter acesso a todos conteúdos do blog. o sistema foi desenvolvido utilizando [Next.js](https://nextjs.org/), [Stripe](https://stripe.com/br) para o sistema de pagamento e [Prismic](https://prismic.io/) como cms para controle dos posts.

<br>

## 🛠 Quais tecnologias e bibliotecas foram utilizadas?

- [React](https://pt-br.reactjs.org/)

- [Next.js](https://nextjs.org/)

- [Stripe](https://stripe.com/br)

- [Fauna DB](https://fauna.com/)

- [Prismic](https://prismic.io/docs/technical-reference/prismicio-client)

- [Next Auth](https://next-auth.js.org/)

- [React Icons](https://react-icons.github.io/react-icons/)

- [Sass](https://sass-lang.com/)

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

<br>

## 📚 mais informações

- Número de páginas: 4

- Responsivo: ✅

- Hospedado: ❌

[Template no Figma](<https://www.figma.com/file/E96jMYYR52NwWaiCWQgSxi/ig.news-(Copy)>)

<br>

## 📝 Páginas

![Home](https://i.imgur.com/ucJm31D.png)

![Posts](https://i.imgur.com/iIAiv7m.png)

![Post Preview](https://i.imgur.com/dh9dipD.png)

![Post](https://i.imgur.com/HVU3jof.png)

<br>

## 🎲 Rodando o projeto

Primeiramente abra um terminal e rode o seguinte comando para o stripe ouvir os eventos da aplicação:

```bash
$ stripe listen --forward-to localhost:3000/api/webhooks
```

Obs: Copie o secret retornado para utilizar no `.env.local` na env `STRIPE_WEBHOOK_SECRET`

```bash
# Clone este repositório
$ git clone https://github.com/CaioVinicius7/ignews.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignews

# Acesse o projeto pelo vs code
$ code .

# baixe as dependências
$ yarn

# Rode o projeto
$ yarn dev

# O projeto ficará ativo na porta:3000 - acesse <http://localhost:3000>
```

Obs: Após clonar o repositório crie e preencha o arquivo `.env.local` seguindo o exemplo do arquivo `.env.local`

<br>

## 💻 Autor

---

<a href="https://www.linkedin.com/in/caio-vin%C3%ADcius-87a761200/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62827681?s=400&u=f0b18831e6690a901f956d637933b9ee2dca3104&v=4" width="100px;" alt=""/>
 <br>
 <h2><b>Caio Vinícius</b></h2></a>

<h4> Feito com muito carinho e dedicação :) </h4>

<br>

[![Linkedin Badge](https://img.shields.io/badge/-caio%20vinícius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/caio-vin%C3%ADcius-87a761200/)
[![Gmail Badge](https://img.shields.io/badge/-caio1525pereira@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:caio1525pereira@gmail.com)](mailto:caio1525pereira@gmail.com)
