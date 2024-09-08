import React from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

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

interface LoginFormProps {
  onSubmit: SubmitHandler<any>
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm<any>({
    // resolver: zodResolver(dataFormSchema),
  })

  const {
    getValues,
    formState: { isDirty },
  } = form

  const onSubmitHandler = (data: any) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-8">
        <FormField
          control={form.control}
          name="product_name"
          render={({ field: { value, ...field } }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customer_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Customer Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={!isDirty} type="submit">
          Apply Filter
        </Button>
      </form>
    </Form>
  )
}
