import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MessageTypes {
  message: string,
  sentByUser: boolean,
  index: number
}

export default function Message({ message, sentByUser, index }: MessageTypes) {
  return (
    <div className={`flex ${sentByUser ? "flex-row" : "flex-row-reverse"} w-full justify-end items-center space-x-6`} key={index} >
      <p>{message}</p>
      <Avatar>
        <AvatarImage src="https://github.com/AaronHo-0716.png" />
      </Avatar>
    </div>
  )
}
