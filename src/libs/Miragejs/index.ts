import { Model, createServer, Factory } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.fullName()
        },
        email() {
          return faker.internet.email()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      }),
    },
    seeds(server) {
      server.createList('user', 100)
    },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users')
      this.post('/users')
      this.put('/users')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
