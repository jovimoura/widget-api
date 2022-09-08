# To Do Widget API

<p>
A simple API made with Node, Express, TypeScript, Prisma, Cors, SQLite in dev ambient, PostgreSQL in deploy, Railway in deploy, and with unit tests made with Jest.
</p>

<p>
This API was developed using TDD and SOLID concepts, making its maintenance much easier and, if necessary, making your transfer from one bank to another much easier.
</p>

<p>
API uses Jest for testing use-cases and other features!
</p>

<br />

## Front-end Repo:

```
https://github.com/jovimoura/widget-app
```

## API Doc.

<br />

#### Send one Feedback Route

```
  POST /feedbacks
```

| Param   | Type       | Description                      |
| :---------- | :--------- | :---------------------------------- |
| `type` | `string` | **Mandatory**. Type of the feedback |

| Param   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `comment` | `string` | **Mandatory**. Comment of the feedback |

| Type   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `screenshot` | `string` | **Optional**. Screenshot url of the feedback|

<br />

## Installation

### Clone

```
git clone https://github.com/jovimoura/widget-api
```

### Access the folder

```
cd <name-folder>
```

### Install dependencies

```
npm i
```

### Run test's

```
npm run test
```

### Start the app

```
npm run dev
```

### Port:

```
http://localhost:3333/
```

## Tecnologies and Libs:

<ul>
    <li>Node</li>
    <li>Express</li>
    <li>TypeScript</li>
    <li>Prisma</li>
    <li>Nodemailer</li>
    <li>Jest</li>
    <li>Cors</li>
</ul>

<br />

## Made by:

### João Victor dos Santos Moura

### E-mail: joaovictors.mouraa@gmail.com

### Linkedin: https://www.linkedin.com/in/jovimoura10/