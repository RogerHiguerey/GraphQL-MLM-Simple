# GraphQL-MLM-Simple

Ejemplo de código básico para implementar un servidor básico de GraphQL con ApolloServer para una empresa de Multi-Level Marketing (MLM).

En este código, se definen los tipos de datos GraphQL, como Person, que representa a una persona en la red de distribución. 

También se definen las consultas y mutaciones GraphQL, como person para obtener información de una persona específica y addPerson para agregar una nueva persona a la red.

Los resolvers se encargan de resolver las consultas y mutaciones GraphQL. 

En este caso, los resolvers utilizan la matriz network como fuente de datos y realizan las operaciones correspondientes, como buscar una persona por su ID, obtener la red completa de personas y agregar una nueva persona.

Al iniciar el servidor de ApolloServer, se proporcionan los esquemas (typeDefs) y los resolvers. 
Luego, el servidor se pone en línea y estará disponible en la URL indicada en la consola.

Esto es solo un ejemplo básico para ilustrar la implementación de un servidor GraphQL para una empresa MLM. 
En una implementación real, podrías tener estructuras de datos más complejas y lógica de negocio adicional.

Esto es una practica que forma parte de mi proceso de aprendizaje sobre GraphQL.
