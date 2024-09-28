import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import { loginFormSchema, type loginFormData } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"

interface LoginFormProps {
  onSubmit: SubmitHandler<loginFormData>
  isPending?: boolean
}

export const LoginForm = ({ onSubmit, isPending }: LoginFormProps) => {
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const {
    formState: { isDirty },
  } = form

  const onSubmitHandler = async (data: loginFormData) => {
    await onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-6">
        <FormField
          defaultValue=""
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input placeholder="Login" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          defaultValue=""
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          size="lg"
          disabled={!isDirty || isPending}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  )
}
