const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphql = require('graphql')

// GraphQL schema setup
const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
})

const schema = new graphql.GraphQLSchema({
    query: QueryRoot
});

// Express server
// Run this with `node server.js` in the root dir (/namegame-node1/)
// and play at localhost:4000/api
const app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  // Turns on the playground for testing GraphQL queries (pronounced graphical).
  graphiql: true,
}));
app.listen(4000);