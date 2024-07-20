export async function sendQuery(apiRoute: string, query: string, conversation_id: string) {

  const route = `${apiRoute}/query?user_query=${query}&conversation_id=${conversation_id} `
  console.log(route)
  try {
    const request = await fetch(route, { method: 'GET' })
    const data = await request.json()

    return data.query
  } catch (error) {
    console.error('Error getting response from server: ', error)
    throw error
  }
}
