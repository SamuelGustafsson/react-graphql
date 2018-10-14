// This file connects to the remote prisma DB and gives ut the ability to query it with js
const { Prisma } = require("prisma-binding");
// import { Prisma } from "prisma-binding";

const db = new Prisma({
  // Is all the prisma data type ( type Query in prisma.graphwl )
  typeDefs: "./generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true
});

module.exports = db;
