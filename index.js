import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from 'graphql-tag';
import fs from 'fs';

// Datos de ejemplo para las personas en la red de distribución
const network = [
  { id: '01', name: 'Diamante'    , sponsorId: null },

  { id: '02', name: 'Esperalda 1' , sponsorId: '01'  },
  { id: '03', name: 'Esmeralda 2' , sponsorId: '01'  },
  { id: '04', name: 'Esmeralda 3' , sponsorId: '01'  },

  { id: '05', name: 'Plata 1'  , sponsorId: '02' },
  { id: '06', name: 'Plata 2'  , sponsorId: '02' },
  { id: '07', name: 'Plata 3'  , sponsorId: '03' },
  { id: '08', name: 'Plata 4'  , sponsorId: '03' },
  { id: '09', name: 'Plata 5'  , sponsorId: '04' },
  { id: '10', name: 'Plata 6'  , sponsorId: '04' },

  { id: '11', name: 'Nuevo 1'  , sponsorId: '05' },
  { id: '12', name: 'Nuevo 2'  , sponsorId: '05'  },
  { id: '13', name: 'Nuevo 3'  , sponsorId: '05'  },
  { id: '14', name: 'Nuevo 4'  , sponsorId: '05'  },
  { id: '15', name: 'Nuevo 5'  , sponsorId: '05'  },
  { id: '16', name: 'Nuevo 6'  , sponsorId: '06'  },
  { id: '17', name: 'Nuevo 7'  , sponsorId: '07'  },
  { id: '18', name: 'Nuevo 8'  , sponsorId: '08'  },
  { id: '19', name: 'Nuevo 9'  , sponsorId: '09'  },
  { id: '20', name: 'Nuevo 10' , sponsorId: '10'  },

];

// Definición de los tipos y consultas GraphQL utilizando el lenguaje de esquema GraphQL (SDL)
const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    sponsor: Person
    recruits: [Person]
  }

  type Query {
    person(id: ID!): Person
    network: [Person]
  }

  type Mutation {
    addPerson(name: String!, sponsorId: ID): Person
  }
`;

// Resolvers para las consultas y mutaciones de GraphQL
const resolvers = {
  Query: {
    person: (_, { id }) => network.find(person => person.id === id),
    network: () => network,
  },

  Mutation: {
    addPerson: (_, { name, sponsorId }) => {
      const newPerson = {
        id: String(network.length + 1),
        name,
        sponsorId,
      };

      network.push(newPerson);
      return newPerson;
    },
  },

  Person: {
    sponsor: person => network.find(p => p.id === person.sponsorId),
    recruits: person => network.filter(p => p.sponsorId === person.id),
  },
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server);
  console.log(`🚀🚀🚀 Servidor en Línea en el Puerto ==> ${url}`);
}

startServer();
