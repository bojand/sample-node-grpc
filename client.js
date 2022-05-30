import path from 'path'
import util from 'util'
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const target = process.env.TARGET_COMPONENT || 'grpcsvc:3000'
const PROTO_PATH = path.join(__dirname, '/helloworld.proto')

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld

const client = new helloProto.Greeter(target, grpc.credentials.createInsecure())
client.sayHelloAsync = (util.promisify(client.sayHello)).bind(client)

export default client
