import {
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Ale } from '../types/ale'

type Props = {
  ale: Ale
  token: string
  action?: string
  method?: 'post' | 'put' | 'patch'
}

const AleForm = (props: Props) => {
  const { ale, token, action = '/ale' } = props
  const {
    register,
    formState: { errors }
  } = useForm({
    defaultValues: ale
  })

  return (
    <form action={action} acceptCharset="UTF-8" method="post">
      {/* append http method for ruby on rails _method input */}
      <input name="_method" type="hidden" value={props.method}></input>

      {/* pass anti-forgery token */}
      <input
        type="hidden"
        name="authenticity_token"
        value={props.token}
      ></input>

      <FormControl>
        <FormLabel>
          Title
          <Input {...register('title')} />
        </FormLabel>
      </FormControl>

      <FormControl>
        <FormLabel>
          Description
          <Input {...register('description')} />
        </FormLabel>
      </FormControl>

      <FormControl>
        <FormLabel>
          Price
          <Input {...register('price')} />
        </FormLabel>
      </FormControl>

      <FormControl>
        <FormLabel>
          Image Url
          <Input {...register('imageUrl')} />
        </FormLabel>
      </FormControl>

      <ButtonGroup>
        <Button type="submit">Save Changes</Button>
        <Button
          as="a"
          href={`/ale/${ale.id}`}
          type="submit"
          formMethod="delete"
        >
          Delete
        </Button>
        <Button as="a" href="/">
          Go Back
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default AleForm
