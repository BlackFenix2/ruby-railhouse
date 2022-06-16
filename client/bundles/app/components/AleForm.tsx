import {
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage
} from '@chakra-ui/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { FaPen, FaSave, FaArrowLeft, FaTrash } from 'react-icons/fa'
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
  const formRef = React.useRef<HTMLFormElement>(null)
  const { ale, token, action = '/ale', isReadonly, method = 'post' } = props
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: ale
  })

  const onSubmit = (data: Ale) => {
    formRef.current.submit()
  }

  return (
    <>
      <form
        id="ale-form"
        ref={formRef}
        action={action}
        onSubmit={handleSubmit(onSubmit)}
        acceptCharset="UTF-8"
        method="post"
      >
        {/* append http method for ruby on rails _method input */}
        <input type="hidden" name="_method" value={method}></input>

        {/* pass anti-forgery token */}
        <input type="hidden" name="authenticity_token" value={token}></input>

        <FormControl isInvalid={!!errors.title} isReadOnly={isReadonly}>
          <FormLabel>
            Title
            <Input {...register('title', { required: 'Title is required' })} />
          </FormLabel>
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description} isReadOnly={isReadonly}>
          <FormLabel>
            Description
            <Textarea
              {...register('description', {
                required: ' Description is required',
                minLength: { value: 10, message: 'Minimum length should be 10' }
              })}
            />
          </FormLabel>
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.price} isReadOnly={isReadonly}>
          <FormLabel>
            Price
            <Input {...register('price', { required: 'Price is required' })} />
          </FormLabel>
          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.imageUrl} isReadOnly={isReadonly}>
          <FormLabel>
            Image Url
            <Input
              {...register('imageUrl', { required: 'Image Url is required' })}
            />
          </FormLabel>
          <FormErrorMessage>
            {errors.imageUrl && errors.imageUrl.message}
          </FormErrorMessage>
        </FormControl>
      </form>
      <ButtonGroup>
        {props.isReadonly ? (
          <>
            <Button as="a" href={`/ale/${ale.id}/edit`} leftIcon={<FaPen />}>
              Edit
            </Button>
          </>
        ) : (
          <>
            <Button
              type="submit"
              form="ale-form"
              leftIcon={<FaSave />}
              isLoading={isSubmitting}
            >
              Save Changes
            </Button>
          </>
        )}

        <DeleteButton action={props.action} token={props.token}>
          Delete
        </DeleteButton>

        <Button as="a" href="/" leftIcon={<FaArrowLeft />}>
          Go Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default AleForm
