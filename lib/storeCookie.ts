'use server'
import { cookies } from "next/headers"

export default async function storeCookies(name, data) {
  cookies().set(name, data)
}
