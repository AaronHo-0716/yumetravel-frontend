import { Input } from "@/components/ui/input";
import Message from "@/components/Message"

export default function Conversation({
  params,
}: {
  params: { conversationId: string };
}) {
  return (
    <div className="flex flex-col justify-center items-center h-lvh w-full p-16 text-lg space-y-12 font-sans relative">
      <div className="h-full w-full p-16 text-xl text-white space-y-12">
        <Message message="Hello world" sentByUser={true} />
        <Message message="Morning losers" sentByUser={false} />
        <Message message="Make america great again" sentByUser={true} />
        <Message message="Gets shot" sentByUser={false} />
      </div>
      <Input type="text" placeholder="Message YuMe" className="w-full bg-grey border-none text-lg p-8 rounded-2xl" />
    </div>
  );
}
