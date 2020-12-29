const {ApolloServer,gql} = require('apollo-server');

//servidor
const server =new ApolloServer();


//arrancar servidor
server.listen().then(({url})=>{
    console.log(`Servidor listo en la URL ${url}`)
})