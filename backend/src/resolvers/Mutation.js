const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check if user are authenticaded

    const item = await context.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    console.log("CREATED A ITEM!", item);
    return item;
  }
};

module.exports = Mutations;
