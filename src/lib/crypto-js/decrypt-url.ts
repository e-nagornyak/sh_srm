import { env } from "@/env"
import CryptoJS from "crypto-js"

export function decryptUrl(encryptedUrl: string): string {
  const decodedUrl = decodeURIComponent(encryptedUrl)
  const bytes = CryptoJS.AES.decrypt(
    decodedUrl,
    env.NEXT_PUBLIC_CRYPTO_SECRET_KEY
  )
  return bytes.toString(CryptoJS.enc.Utf8)
}
