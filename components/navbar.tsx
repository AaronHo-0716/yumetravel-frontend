import Image from "next/image";
import HeaderIcon from "../public/header.svg";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center pt-4 px-6 font-sans w-full">
      <Image src={HeaderIcon} alt="Yume Trave Logo" />
      <div className="flex justify-center items-center space-x-12">
        <span className="text-accent text-lg">Upgrade Plan</span>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
