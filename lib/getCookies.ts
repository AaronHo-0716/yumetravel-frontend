'use server'
import { cookies } from "next/headers"

export default async function getCookies(name: string) {
  return cookies().get(name)
}
