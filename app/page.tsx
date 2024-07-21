"use client"
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'
import { useToast } from "@/components/ui/use-toast";
import { createConversation } from "@/lib/createConversation";
import { sendQuery } from "@/lib/query";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import storeCookies from "@/lib/storeCookie";

export default function Home() {
  const router = useRouter()

  const [query, setQuery] = useState('')
  const [conversationId, setConversationId] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const apiRoute = process.env.NEXT_PUBLIC_API_ROUTE

  useEffect(() => {
    const getConversationId = async () => {
      try {
        console.log(apiRoute)
        const id = await createConversation(apiRoute)
        setConversationId(id)
        toast({
          description: "LLM connected"
        })
      } catch (error) {
        console.error("Failed setting conversation id: ", error)
        throw error
      }
    }

    getConversationId()
  }, [])

  const sendQueryHandler = async () => {
    if (conversationId) {
      try {
        toast({ description: "Sending..." })
        let rectifiedQuery = query.replace(/ /g, '%20')
        const initMessage = await sendQuery(apiRoute, rectifiedQuery, conversationId)

        await storeCookies('initMessage', initMessage)

        router.push(`/conversation/${conversationId}`)

      } catch (error) {
        console.error('Error in sendQueryHandler: ', error)
      }
    } else {
      console.error("No conversation id to send.")
    }
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-fixed text-accent font-sans relative"
    >
      <Navbar absolute={true} />
      <div className="flex flex-col justify-center items-center h-lvh w-full space-y-8">
        <h1 className="text-6xl"><span className="text-primary">YUME</span> TRAVEL</h1>
        <h2 className="text-xl">&quot;Your Personal AI Travel Advisor&quot;</h2>
        <Input type="text" placeholder="Where do you want to go?" className="w-1/3 bg-grey border-none text-lg p-8 rounded-lg" onChange={(e) => setQuery(e.target.value)} />
        <Button className="text-lg py-8 px-10 bg-grey hover:bg-primary" onClick={sendQueryHandler}>
          <span>Ask YuMe</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </main>
  );
}
