const path = require('path')
const fastify = require('fastify')({ logger: true })
const fastifyStatic = require('@fastify/static')

const client = require('./client')

const port = process.env.PORT || 3000

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public')
})

const opts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      }
    }
  }
}

fastify.post('/', opts, async (request, reply) => {
  return client.sayHelloAsync(request.body)
})

const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
