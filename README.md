studio prisma: 

```
npx prisma studio
```

create migrate: 

```
npx prisma migrate dev
```

#SOLID

1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

-----------------------------------

1. Cada classe tem uma responsabilidade única;
2. As classes da aplicação devem ser abertas para extensão mas fechadas para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
4. ...
5. ...


use-case: são as funcionalidades da aplicação separadas 

cors: é uma ferramenta q faz um controle de segurança no back end p q front-ends inadequados acessem os dados do backend, ele decide q front pode usar passando a url do front, assim :

```
app.use(cors({
  origin: 'http://localhost:5173'
}))
```

obs: se n tiver origin, fica aberto p geral