import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

type Props = {}

const JWTForm = (props: Props) => {
  const form = useForm()

  function onSubmit(data: Object) {
    console.log('submitted', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="token"
          render={({ field }) =>
            <FormItem>
              <FormLabel>Encoded</FormLabel>
              <Textarea
                placeholder="Pass the token here"
                rows={7}
                {...field}
              />
              <FormMessage />
            </FormItem>
          }
        >
        </FormField>
        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default JWTForm
