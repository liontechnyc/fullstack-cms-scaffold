# Fullstack CMS Scaffold

## Installation

Install mono-repo dependencies

```bash
npm install
```

Install Gatsby frontend dependencies

```bash
cd frontend && npm install
```

Install Strapi backend dependencies

```bash
cd backend && npm install
```

## Development

Start split-process development environment

```bash
npm run develop
```

Start frontend development server

```bash
npm run develop:frontend
```

Frontend app can be accessed locally from:

`http://localhost:8000`

Start backend development server

```bash
npm run develop:backend
```

Backend CMS admin dashboard can be accessed locally from:

`http://localhost:8001/dashboard`

Backend GraphiQL interface can be accessed locally from:

`http://localhost:8001/graphql`


## Staging

Build staging container

```bash
npm run build:staging
```

Run staging environment

```bash
npm run staging
```

Stop Docker container

```bash
npm run docker:down
```

Access frontend staging app from: 

`http://<docker-machine-ip>:8080/`

Access backend staging cms from: 

`http://<docker-machine-ip>:8081/admin`

## Built With

[GatsbyJS](www.gatsbyjs.org) - Blazing fast modern site generator for React. Go beyond static sites: build blogs, e-commerce sites, full-blown apps, and more with Gatsby.

[Strapi](www.strapi.io) - The next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device.

[Apollo GraphQL](https://www.apollographql.com/) - Simplify app development by combining APIs, databases, and microservices into a single data graph that you can query with GraphQL