// Here is the place where database calls / data fetching i going to be regardless of what database or data source

const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db")

  //   async items(parent, AbortSignal, context, info) {
  //     const items = await context.db.query.items();
  //     return items;
  //   }
};

module.exports = Query;
