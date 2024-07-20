import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-fixed text-accent font-sans relative"
      style={{ backgroundImage: "url('../public/background.png')" }}>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-lvh w-full space-y-8">
        <h1 className="text-6xl"><span className="text-primary">YUME</span> TRAVEL</h1>
        <h2 className="text-xl">"Your Personal AI Travel Advisor"</h2>
        <Input type="text" placeholder="Where do you want to go?" className="w-1/3 bg-grey border-none text-lg p-8 rounded-lg" />
        <Button className="text-lg py-8 px-10 bg-grey hover:bg-primary">
          <span>Ask YuMe</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </main>
  );
}
