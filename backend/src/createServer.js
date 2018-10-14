const { GraphQLServer } = require("graphql-yoga");

const Mutation = require("./resolvers/mutation");
const Query = require("./resolvers/query");
const db = require("./db");

// Create the GraphQL Yoga server

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: request => ({ ...request, db })
  });
}

module.exports = createServer;
