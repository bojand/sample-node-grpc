function log (msg) {
  const now = (new Date()).toUTCString()
  console.log(`[${now}] ${msg}`)
}

function sayHello (call, fn) {
  const name = call.request.name
  log(`sayHello call: ${name}`)
  fn(null, { message: 'Hello ' + name })
}

module.exports = {
  sayHello,
  log
}