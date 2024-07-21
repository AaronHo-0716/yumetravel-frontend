export async function createConversation(path: string) {
  try {
    const res = await fetch(path + "/create_conversation")
    const data = await res.json()

    return data.conversation_id
  } catch (error) {
    console.error('Error creating a conversation: ', error)
    throw error
  }
}
