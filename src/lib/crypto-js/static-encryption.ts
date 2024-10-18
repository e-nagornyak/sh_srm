import { env } from "@/env"
import CryptoJS from "crypto-js"

const ENCRYPTION_CONFIG = {
  key: env.NEXT_PUBLIC_CRYPTO_SECRET_KEY,
  salt: env.NEXT_PUBLIC_SAL_KEY,
  iv: "1234567890123456", // Initialization vector
  iterations: 65536,
  keySize: 256 / 32, // _256 BITS
}

function base64UrlEncode(str: string): string {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/")
  while (base64.length % 4) {
    base64 += "="
  }
  return base64
}

const encryptData = (text: string): string | null => {
  try {
    const key = CryptoJS.PBKDF2(ENCRYPTION_CONFIG.key, ENCRYPTION_CONFIG.salt, {
      keySize: ENCRYPTION_CONFIG.keySize,
      iterations: ENCRYPTION_CONFIG.iterations,
    })

    const iv = CryptoJS.enc.Utf8.parse(ENCRYPTION_CONFIG.iv)

    const encrypted = CryptoJS.AES.encrypt(text, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    })

    return base64UrlEncode(encrypted.toString())
  } catch (error) {
    console.error("Encryption error:", error)
    return null
  }
}

const decryptData = (encryptedText: string): string | null => {
  try {
    const key = CryptoJS.PBKDF2(ENCRYPTION_CONFIG.key, ENCRYPTION_CONFIG.salt, {
      keySize: ENCRYPTION_CONFIG.keySize,
      iterations: ENCRYPTION_CONFIG.iterations,
    })

    const iv = CryptoJS.enc.Utf8.parse(ENCRYPTION_CONFIG.iv)

    const decrypted = CryptoJS.AES.decrypt(
      base64UrlDecode(encryptedText),
      key,
      {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }
    )

    return decrypted.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    console.error("Decryption error:", error)
    return null
  }
}

export { encryptData, decryptData }
