# KondoRu

KondoRu é uma plataforma full-stack que visa modernizar a experiência de busca e gestão de imóveis residenciais e comerciais. O projeto é composto por uma **API backend** construída em **Node.js** com **Sequelize** para manipulação de banco de dados, e dois front-ends: **front-user**, uma interface responsiva para clientes, e **front-admin**, uma interface administrativa que ainda está em desenvolvimento.

## Estrutura do Repositório

Este repositório utiliza um **mono-repo**, contendo tanto o back-end quanto os front-ends para o usuário e administrador, com uma arquitetura baseada em workspaces do **Yarn**. Aqui estão os componentes principais do projeto:

### Back-End

- **API**: A API é responsável por fornecer dados sobre imóveis e gerenciar a interação com o banco de dados. Desenvolvida com **Node.js**, utiliza **Sequelize** para o ORM e autenticação segura com **JWT**.
- **Tecnologias**: 
  - **Node.js**
  - **Sequelize** (ORM)
  - **Express**
  - **JWT** para autenticação
  - **PostgreSQL** como banco de dados

Para rodar a API:
```bash
cd back-end
npm run dev
```

### Front-End

#### Front-User

O **front-end do usuário** é desenvolvido com **Next.js**, proporcionando uma interface intuitiva e responsiva, com funcionalidades como filtros avançados e exibição de imóveis. Este front-end foi projetado para se integrar diretamente à API.

- **Tecnologias**:
  - **Next.js**
  - **React**
  - **Axios**
  - **JWT Decoder**
  - **UUID**
  - **React Hook Form**
  - **ZOD**
  - **Swiper**
  - **Styled-components**
  - **TypeScript**

Para rodar o front-end do usuário:
```bash
cd mono-repo
yarn dev:user
```

#### Front-Admin

O **front-end administrador** ainda está em desenvolvimento e será uma interface exclusiva para administradores, permitindo gerenciar imóveis, usuários e permissões. Em breve, será integrado à plataforma.

Para rodar o front-end do administrador (em desenvolvimento):
```bash
cd mono-repo
yarn dev:admin
```

### Design System

O **Design System** contém componentes e estilos reutilizáveis que garantem consistência visual e funcional em toda a plataforma. Ele é compartilhado entre os front-ends e está localizado no diretório `packages/design-system`.

### Eslint

O **Eslint** é configurado para garantir a qualidade do código e boas práticas de programação. Ele é compartilhado entre os front-ends e está localizado no diretório `setup/eslint-commons`. Ele ajuda a detectar problemas de sintaxe, semântica e inconsistências no código, promovendo um código mais limpo e fácil de manter.

Para rodar o ESLint no front-end do usuário:
```bash
cd mono-repo
yarn lint:user        # Procura erros
yarn lint:user-fix    # Procura e corrige erros
```

### Typescript

O **TypeScript** é utilizado para proporcionar tipagem estática e aumentar a segurança e clareza no código. Ele é compartilhado entre os front-ends e está localizado no diretório `setup/tsconfig-commons`. A configuração do TypeScript garante que as definições de tipos sejam aplicadas corretamente e que os desenvolvedores possam identificar erros antes da execução, melhorando a experiência de desenvolvimento e reduzindo a quantidade de bugs.

### CI/CD

O projeto utiliza pipelines de Integração Contínua (CI) e Deploy Contínuo (CD). No processo de CI, são executadas tarefas como o linting, garantindo a qualidade do código, e é gerado um deploy preview para revisão. Já o processo de CD é responsável por realizar o deploy do projeto em ambiente de produção, assegurando que as atualizações sejam entregues de forma rápida e segura.

### Scripts Comuns

O projeto utiliza **Yarn Workspaces** para facilitar o gerenciamento de dependências entre os diversos pacotes.

- **Rodar o back-end**:
  ```bash
  cd back-end
  npm run dev
  ```

- **Rodar o front-end do usuário**:
  ```bash
  cd mono-repo
  yarn dev:user
  ```

- **Rodar o front-end do administrador**:
  ```bash
  cd mono-repo
  yarn dev:admin
  ```

- **Deploy**: Para realizar o deploy em ambiente de staging ou produção:
  ```bash
  cd mono-repo
  yarn deploy:staging
  yarn deploy:user
  ```

### Estrutura de Pastas

- **back-end**: Contém o código da API, incluindo rotas, controladores, e modelos.
- **mono-repo**:
  - **packages**: Contém pacotes reutilizáveis como o design system.
  - **projects**: Contém os projetos front-end (user e admin).
  - **setup**: Contém configurações comuns, como ESLint e TSConfig.

## Como Contribuir

Contribuições são bem-vindas! Para contribuir com o projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Add new feature'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-feature`).
5. Crie um pull request para revisão.

## Licença

Este projeto está licenciado sob a [Licença ISC](LICENSE).

## Autor

Desenvolvido por **Bruno Tenório**.

---

Agradecemos pela sua visita ao nosso repositório! 💻✨


### O que foi alterado e melhorado:

1. **Estrutura organizada** para refletir a natureza full-stack do projeto, com ênfase nos dois front-ends (front-user e front-admin) e no back-end.
2. **Descrições claras** das tecnologias e scripts necessários para rodar cada parte do sistema.
3. **Exemplos de comandos** para execução e deploy de cada parte do sistema.
4. **Uso de Workspaces** do Yarn destacado para o gerenciamento de dependências entre os pacotes.