const { ApolloServer } = require('apollo-server-express');
const { User, Book } = require("../models");

const resolvers = {
   Query: {
    // query resolvers will go here
    // could not figure them out with the time left
   },
        
    Mutation: {
    // mutation resolvers will go here
    // could not figure them out with the time left
    },
}

module.exports = resolvers;