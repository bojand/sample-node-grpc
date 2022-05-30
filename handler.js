export function log (msg) {
  const now = (new Date()).toUTCString()
  console.log(`[${now}] ${msg}`)
}

export function sayHello (call, fn) {
  const name = call.request.name
  console.dir(call.request)
  console.dir(call.metadata.getMap())
  log(`sayHello call: ${name}`)
  fn(null, { message: 'Hello ' + name })
}
