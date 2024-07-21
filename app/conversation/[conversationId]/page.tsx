'use client'
import { Input } from "@/components/ui/input";
import Message from "@/components/Message"
import Navbar from "@/components/Navbar";
import { useState } from 'react'
import { sendQuery } from "@/lib/query";
import { Button } from "@/components/ui/button";

export default function Conversation({ params }: {
  params: { conversationId: string };
}) {

  const apiRoute = process.env.NEXT_PUBLIC_API_ROUTE
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendQueryHandler = async () => {
    if (params.conversationId) {
      try {
        let rectifiedQuery = message.replace(/ /g, '%20')
        await sendQuery(apiRoute, rectifiedQuery, params.conversationId)
      } catch (error) {
        console.error('Error in sendQueryHandler: ', error)
      }
    } else {
      console.error("No conversation id to send.")
    }
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-fixed text-accent font-sans ">
      <Navbar absolute={false} />
      <div className="flex self-end flex-col justify-center items-center h-[90vh] w-full space-y-8 p-10">
        <div className="flex border-2 w-full h-full">
          {messages.map((msg: string, sentByUser: boolean, index: number) => (
            <Message message={msg} sentByUser={sentByUser} index={index} />
          ))}

        </div>
        <Input type="text" placeholder="Message YuMe" className="w-1/3 bg-grey border-none text-lg p-8 rounded-2xl" onChange={(e) => setMessage(e.target.value)} />
        <Button className="text-lg py-8 px-10 bg-grey hover:bg-primary" onClick={sendQueryHandler}>
          <span>Ask YuMe</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
