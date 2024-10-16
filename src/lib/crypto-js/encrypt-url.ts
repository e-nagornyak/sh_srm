import { env } from "@/env"
import CryptoJS from "crypto-js"

export function encryptUrl(url: string): string {
  const encrypted = CryptoJS.AES.encrypt(
    url,
    env.NEXT_PUBLIC_CRYPTO_SECRET_KEY
  ).toString()
  return encodeURIComponent(encrypted)
}
