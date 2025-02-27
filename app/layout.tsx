import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import backgroundImage from '../public/background.png'
import "./globals.css";

const poppins = Poppins({
  weight: ["600", "500", "400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-header",
});

const roboto = Roboto({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-paragraph",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-screen bg-background antialiased text-accent",
          poppins.variable,
          roboto.variable,
        )}
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
