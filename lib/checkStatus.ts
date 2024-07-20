import { useRouter } from "next/router";

const pollStatus = async (apiRoute: string, conversationId: string) => {
  const router = useRouter()
  const interval = setInterval(async () => {
    const res = await fetch(`${apiRoute}/chat-status?conversation_id=${conversationId}`);
    const data = await res.json();

    if (data === 'COMPLETED') {
      clearInterval(interval);
      // Redirect to the desired route
      router.push(`/conversation/${conversationId}`);
    }
  }, 3000); // Check every 3 seconds
};


export default pollStatus
