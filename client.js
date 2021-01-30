const path = require('path')
const util = require('util')
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const target = process.env.TARGET_COMPONENT || 'grpcsvc:3000'
const PROTO_PATH = path.join(__dirname, '/helloworld.proto')

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld

const client = new helloProto.Greeter(target, grpc.credentials.createInsecure())
client.sayHelloAsync = (util.promisify(client.sayHello)).bind(client)

module.exports = client
