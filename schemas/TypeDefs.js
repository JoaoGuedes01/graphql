const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type User {
        name: String!
        username: String!
        email: String!
        password: String!
        age: Int!
    }

    type Response {
        code: Int!
        message: String!
    }

    # Queries
    type Query{
        getAllUsers: [User!]!
    }


    # Mutations
    type Mutation {
        createUser(name: String! username: String! email: String! password: String! age: Int!): Response!

    }


`

module.exports = {typeDefs};