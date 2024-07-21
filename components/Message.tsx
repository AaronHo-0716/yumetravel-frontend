import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from '@/public/avatar.svg'

export default function Message({ message, sentByUser }) {
  return (
    <div className={`flex ${sentByUser ? "flex-row-reverse" : "flex-row"} w-4/5 justify-start items-center space-x-6 space-y-12 `} >
      {
        sentByUser ? <></> :
          <Avatar className="bg-grey rounded-full">
            <AvatarImage src={avatar.src} />
          </Avatar>
      }
      <p className={`${sentByUser ? "p-4 bg-grey rounded-lg" : ""} text-lg`}>{message}</p>
    </div>
  )
}
