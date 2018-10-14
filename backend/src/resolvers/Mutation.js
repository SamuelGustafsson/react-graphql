const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check if they are signed

    const item = await context.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
};

module.exports = Mutations;
