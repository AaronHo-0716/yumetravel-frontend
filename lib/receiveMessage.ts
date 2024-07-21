export async function receiveMessage(apiRoute: string, conversation_id: string) {

  const route = `${apiRoute}/message?conversation_id=${conversation_id} `
  console.log(route)
  try {
    const request = await fetch(route, { method: 'GET' })
    const data = await request.json()

    console.log(data.message)

    return data.message

  } catch (error) {
    console.error('Error getting response from server: ', error)
    throw error
  }
}
