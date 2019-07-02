const { ApolloServer, gql } = require('apollo-server')

const sleep = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000))

const resolvers = {
  Query: {
    hello: async (_, { name }) => {
      await sleep(0.2)
      return { echo: `Hello ${name || 'World'}` }
    },
  },
  Hello: {
    slowField: async () => {
      await sleep(0.5)
      return 'this is slower ...'
    },
  },
}

const typeDefs = gql`
  type HelloResponse {
    echo: String
    slowField: String
  }

  type Query {
    "A simple type for getting started!"
    hello(name: String): HelloResponse!
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: 'service:profiling-test:N4yawVKcUgpEgrLYUDfUbg',
  },
})

server
  .listen()
  .then(({ port }) => console.log(`Server is running on localhost:${port}`))
