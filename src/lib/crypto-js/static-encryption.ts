import { env } from "@/env"
import CryptoJS from "crypto-js"

const ENCRYPTION_CONFIG: {
  key: string
  salt: string
  iv: string
  iterations: number
  keySize: number
} = {
  key: env.NEXT_PUBLIC_CRYPTO_SECRET_KEY, // Static key
  salt: env.NEXT_PUBLIC_SAL_KEY, // Static salt
  iv: "1234567890123456", // Static initialization vector (16 bytes)
  iterations: 65536, // Number of iterations for the key
  keySize: 256 / 32, // Key size: 256 bits
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

    return encrypted.toString()
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

    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    console.error("Error during decryption:", error)
    return null
  }
}

export { encryptData, decryptData }
