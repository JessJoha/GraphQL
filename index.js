const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// Esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Resolver para el esquema
const root = {
  hello: () => {
    return "¡Hola, Mundo desde GraphQL!";
  },
};

// Configurar middleware de GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Interfaz gráfica para probar GraphQL
  })
);

// Arrancar el servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
});
