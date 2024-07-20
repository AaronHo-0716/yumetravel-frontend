export async function createConversation(path: string): Promise<string> {
  try {
    const res = await fetch(path + "/create_conversation")
    const data = await res.json()

    console.log(data.conversation_id)
    return data.conversation_id
  } catch (error) {
    console.error('Error creating a conversation: ', error)
    throw error
  }
}
