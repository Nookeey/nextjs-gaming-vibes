exports.handler = async () => {
  console.log('function run')

  const data = { name: 'mario', age: 35, jog: 'plumber' }

  // return response to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}