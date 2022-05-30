const path = require('path')
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const { log, sayHello } = require('./handler')

const PROTO_PATH = path.join(__dirname, '/helloworld.proto')
const PORT = process.env.PORT || 3000

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld

function main () {
  const server = new grpc.Server()
  server.addService(helloProto.Greeter.service, { sayHello })
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    log(`Node.js gRPC server start on 0.0.0.0:${PORT}`)
    server.start()
  })
}

main()
