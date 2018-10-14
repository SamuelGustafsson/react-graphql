// Here is the place where database calls / data fetching i going to be regardless of what database or data source

const Query = {
  dogs(parent, args, context, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;
