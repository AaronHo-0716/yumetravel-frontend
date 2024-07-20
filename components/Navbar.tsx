import Image from "next/image";
import HeaderIcon from "../public/logo.svg";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center pt-4 px-6 font-sans w-full h-[10vh] absolute">
      <Image src={HeaderIcon} alt="Yume Trave Logo" />
      <div className="flex justify-center items-center space-x-12">
        <span className="text-accent text-lg hover:underline hover:underline-offset-4">Upgrade Plan</span>
        <Button className="text-lg py-6 px-10">Sign Up</Button>
      </div>
    </div>
  );
}
