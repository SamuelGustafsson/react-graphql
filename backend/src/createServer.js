const { GraphQlServer } = require("graphql-yoga");

const Mutation = require("./resolvers/mutation");
const Query = require("./resolvers/query");
const db = require("./db");

// Create the GraphQL Yoga server

function createServer() {
  return new GraphQlServer({
    typeDefs: "./generated/prisma.graphql",
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
