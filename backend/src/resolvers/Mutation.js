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
  },

  updateItem(parent, args, context, info) {
    // First take a copy of the update
    const updates = { ...args };
    //  Remove the ID from the updates
    delete updates.id;
    // Run the update method
    return context.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );
  }
};

module.exports = Mutations;
