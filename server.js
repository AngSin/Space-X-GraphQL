const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

const app = express();
const PORT = process.env.port || 5000;


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT), () => console.log('Server started on port', PORT);