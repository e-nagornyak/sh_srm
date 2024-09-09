"use client"

import { userAPI } from "@/lib/api/user/user-api"

interface ComponentProps {}

export function Component(props: ComponentProps) {
  const getUsers = async () => {
    try {
      const response = await userAPI.getUsers()
      // const response = await fetch("http://127.0.0.1:8000/api/shuser/users/", {
      //   method: "GET",
      //   headers: {
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1OTA0OTA3LCJpYXQiOjE3MjU5MDEzMDcsImp0aSI6IjkxYzg4YzAzMGM4MTQ0OWM4YjJkOGJiMGVhNDFjNTZlIiwidXNlcl9pZCI6MX0.B6oeL5wTp98wFKGsc_DRyKzQSFxMtIe6SOu9zer4AOg",
      //     "Content-Type": "application/json",
      //   },
      // })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={"flex flex-col gap-2"}>
      <button onClick={getUsers}>get users</button>
    </div>
  )
}
