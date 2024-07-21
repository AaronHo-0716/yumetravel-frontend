export async function receiveMessage(apiRoute: string, conversation_id: string) {

  const route = `${apiRoute}/message?conversation_id=${conversation_id} `
  console.log(route)
  try {
    const request = await fetch(route, { method: 'GET' })
    const data = await request.json()

    console.log(data.message)

    if (data.message[0].type == 'summary') {
      console.log('data type is summary')
      return data.message[0].content
    }

    return data.message.content
  } catch (error) {
    console.error('Error getting response from server: ', error)
    throw error
  }
}
