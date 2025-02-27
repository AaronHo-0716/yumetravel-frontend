'use client'
import { Input } from "@/components/ui/input";
import Message from "@/components/Message"
import Navbar from "@/components/Navbar";
import { useState, useEffect } from 'react'
import { sendQuery } from "@/lib/query";
import { Button } from "@/components/ui/button";
import getCookies from "@/lib/getCookies";
import { receiveMessage } from "@/lib/receiveMessage";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";

export default function Conversation({ params }: {
  params: { conversationId: string };
}) {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { toast } = useToast()
  const router = useRouter()

  const scrollDown = () => {
    document.getElementById('scrollTo').scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const sendQueryHandler = async () => {
    if (params.conversationId && message.length) {
      try {
        let rectifiedQuery = message.replace(/ /g, '%20')

        setMessages((prev) => [...prev, { msg: message, type: 'user' }])
        setMessage('')

        const query = await sendQuery(process.env.NEXT_PUBLIC_API_ROUTE, rectifiedQuery, params.conversationId)

        const received = await receiveMessage(process.env.NEXT_PUBLIC_API_ROUTE, params.conversationId)

        received.forEach((curr, index) => {
          setMessages((prev) => [...prev, { msg: received[index], type: curr.type }])
          scrollDown()
        })

      } catch (error) {
        console.error('Error in sendQueryHandler: ', error)
      }
    } else if (!message.length) {
      console.error("Can't send empty message")
      toast({
        description: "Can't send empty message"
      })
    } else {
      console.error("No conversation id to send.")
    }
  }

  useEffect(() => {
    const getInitMessage = async () => {
      try {
        const cookie = await getCookies('initMessage')
        setMessages((prev) => [...prev, { msg: cookie.value, type: "user" }])
        const messageResponse = await receiveMessage(process.env.NEXT_PUBLIC_API_ROUTE, params.conversationId)

        messageResponse.forEach((curr, index) => {
          setMessages((prev) => [...prev, { msg: messageResponse[index], type: curr.type }])
        })
      } catch (error) {
        console.error("Failed fetching init message from cookie: ", error)
        throw error
      }
    }

    getInitMessage()
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-fixed text-accent font-sans ">
      <Navbar absolute={false} />
      <div className="flex self-end flex-col justify-center items-center h-[90vh] w-full space-y-8 p-10">
        <div className="flex flex-col items-center w-full h-full overflow-scroll space-y-12">
          {messages.map(({ msg, type }, index) => (
            <Message message={msg} key={index} type={type} id='scrollTo' />
          ))}

        </div>
        <div className="flex flex-row justify-center items-center w-full">

          <div className="flex justify-center items-center space-x-12 bg-grey border-none text-xl rounded-2xl px-2 py-4 w-3/5">
            <Input type="text" value={message} placeholder="Message YuMe" className="w-full bg-grey border-none" onChange={(e) => setMessage(e.target.value)} />
            <Button className="bg-grey hover:bg-slate-700 p-4 rounded-full" onClick={sendQueryHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </Button>

          </div>

        </div>
      </div>
    </div>
  );
}
