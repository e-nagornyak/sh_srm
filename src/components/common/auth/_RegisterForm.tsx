import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import { routePaths } from "@/config/routes"
import {
  registerFormSchema,
  type registerFormData,
} from "@/lib/validations/auth"
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
import { Link } from "@/components/ui/link"
import { PasswordInput } from "@/components/ui/password-input"

interface RegisterFormProps {
  onSubmit: SubmitHandler<registerFormData>
}

export const _RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const form = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const {
    formState: { isDirty },
  } = form

  const onSubmitHandler = (data: registerFormData) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-6">
        <FormField
          defaultValue=""
          control={form.control}
          name="username"
          render={({ field: { value, ...field } }) => (
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
                <PasswordInput {...field} placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          className="mx-auto block w-fit text-blue-600 hover:underline"
          href={routePaths.auth.login}
        >
          Already registered?
        </Link>
        <Button className="w-full" size="lg" disabled={!isDirty} type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
