import {
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { FaPen, FaSave, FaArrowLeft } from 'react-icons/fa'
import type { Ale } from '../types/ale'
import DeleteButton from './DeleteButton'

type Props = {
  ale: Ale
  token: string
  action?: string
  method?: 'post' | 'put' | 'patch'
  isReadonly?: boolean
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
      <fieldset disabled={props.isReadonly}>
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
          {props.isReadonly ? (
            <>
              <Button as="a" href={`/ale/${ale.id}/edit`} leftIcon={<FaPen />}>
                Edit
              </Button>
            </>
          ) : (
            <>
              <Button type="submit" leftIcon={<FaSave />}>
                Save Changes
              </Button>
            </>
          )}
          <DeleteButton action={`/ale/${ale.id}`} token={props.token}>
            Delete
          </DeleteButton>
          <Button as="a" href="/" leftIcon={<FaArrowLeft />}>
            Go Back
          </Button>
        </ButtonGroup>
      </fieldset>
    </form>
  )
}

export default AleForm
