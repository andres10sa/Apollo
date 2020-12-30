const {gql} = require('apollo-server');

//no permito que type Usuario retorne el password, type Usuario es el modelo que defino y que retorna la función
//el input UsuarioInput es la data del usuario que voy a crear, es decir el argumento que paso a la función
//Schema
const typeDefs=gql`

type Usuario{
    id:ID
    nombre:String
    apellido:String
    email:String
    creado:String
}

type Token{
    token:String
}

input UsuarioInput{
    nombre:String!
    apellido:String!
    email:String! 
    password:String!
}

input AutenticarInput{
  email:String!
  password:String!
}
  
 type Query{
     obtenerUsuario(token:String!):Usuario
 }

 type Mutation{
   nuevoUsuario(input:UsuarioInput):Usuario
   autenticarUsuario(input:AutenticarInput):Token
  }
`;


module.exports = typeDefs;

