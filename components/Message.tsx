import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from '@/public/avatar.svg'

export default function Message({ message, type }) {

  console.log({ message, type })
  return (
    <>
      {type == 'user' ? (
        <div className={`flex flex-row-reverse w-4/5 justify-start items-center space-x-6 space-y-12 `} >
          <p className={`p-4 bg-grey rounded-lg text-lg`}>{message}</p>
        </div>
      ) : (<></>)
      }
      {type == 'summary' ? (
        <div className={`flex flex-row w-4/5 justify-start items-center space-x-6 space-y-12 `} >
          <Avatar className="bg-grey rounded-full">
            <AvatarImage src={avatar.src} />
          </Avatar>
          <p className={`text-lg`}>{message.content}</p>
        </div>
      ) : (<></>)
      }
      {type == 'possible_flights' ? (
        <div className={`flex flex-row w-4/5 justify-start items-center space-x-6 space-y-12 `} >
          <Avatar className="bg-grey rounded-full">
            <AvatarImage src={avatar.src} />
          </Avatar>
          <div className="flex flex-col items-start p-8 bg-dark">
            {message.content.map((curr) => (
              <>
                <p className="font-bold text-2xl">{'Aircraft Type: ' + curr['AircraftType']}</p>
                <p className="font-bold text-2xl">{'Airline: ' + curr['Airline']}</p>
                <p className="font-bold text-2xl">{'Arrival Time: ' + curr['ArrivalTime']}</p>
                <p className="font-bold text-2xl">{'Departure Time: ' + curr['DepartureTime']}</p>
                <p className="font-bold text-2xl">{'Price: ' + curr['Price']}</p>
              </>
            ))}
          </div>
        </div>
      ) : (<></>)
      }
      {type == 'possible_places' ? (
        <div className={`flex flex-row w-4/5 justify-start items-center space-x-6 space-y-12 `} >
          <Avatar className="bg-grey rounded-full">
            <AvatarImage src={avatar.src} />
          </Avatar>
          <div className="flex flex-row p-8 space-x-4 w-full">
            {message.content.map((curr) => (
              <div className="rounded-lg bg-dark flex flex-col h-[60vh] w-2/5 justify-evenly overflow-hidden">
                <img className="object-cover h-1/2" src={curr['Pictures'][0]} />
                <div className="h-1/2 flex flex-col justify-center px-6">
                  <p className="font-bold text-accent text-2xl">{curr['Name']}</p>
                  <p className="text-slate-300">{`${curr['Description'].substring(0, 400)}...`}
                    <span className="text-grey hover:underline hover:cursor-pointer">View More</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (<></>)
      }
    </>
  )
}
