const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schemas/TypeDefs');
const { resolvers } = require('./schemas/Resolvers');


const app = express();
const server = new ApolloServer({ typeDefs, resolvers })

app.get('/',(req,res)=>{
    return res.send("homepage, visit /graphql to query the backend")
})

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
    app.listen(3001, () => {
        console.log('Server listening on port 3000');
    })
}



startServer();
