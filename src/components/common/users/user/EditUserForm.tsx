import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"

import { RoleArray } from "@/lib/api/user/helpers"
import {
  editUserFormSchema,
  type EditUserFormData,
} from "@/lib/validations/user"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface EditUserFormProps {
  onSubmit: SubmitHandler<EditUserFormData>
  defaultValues?: EditUserFormData
  isPending?: boolean
  buttonText?: string
}

export const EditUserForm = ({
  onSubmit,
  isPending,
  defaultValues,
  buttonText = "Submit",
}: EditUserFormProps) => {
  const form = useForm<EditUserFormData>({
    resolver: zodResolver(editUserFormSchema),
    defaultValues,
  })

  const {
    formState: { isDirty, isSubmitting },
  } = form

  const onSubmitHandler = async (data: EditUserFormData) => {
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
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger
                    className="h-8 w-full px-2 py-0.5 capitalize hover:bg-muted/50"
                    {...field}
                  >
                    <SelectValue placeholder={"Role"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {RoleArray?.map((role) => (
                        <SelectItem
                          className="capitalize"
                          key={role}
                          value={role}
                        >
                          {role}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          defaultValue=""
          control={form.control}
          name="password"
          render={({ field: { value, ...field } }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  value={value || ""}
                  {...field}
                  placeholder="Password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          size="lg"
          disabled={!isDirty || isPending || isSubmitting}
          type="submit"
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  )
}
