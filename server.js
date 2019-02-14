const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./schema.js');

const app = express();
const PORT = process.env.port || 5000;

// Allow Cross-Origin-Resource-Sharing
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT), () => console.log('Server started on port', PORT);