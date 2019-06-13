const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

// env variables from .env file recognized
const dotenv = require("dotenv");
dotenv.config();

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
);

const port = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://utkow1991:${
      process.env.MONGO_PASS
    }@cluster0-ympqd.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port, () => {
      console.log('\x1b[1m%s\x1b[0m', `\nServer started with db... \n\nhttp://localhost:${port}/graphql`);
    });
  })
  .catch(err => {
    console.error(err);
  });
