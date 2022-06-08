import { Button } from '@chakra-ui/react'
import * as React from 'react'

type Props = {
  action: string
  token: string
  children: React.ReactNode
}

/**
 * Delete button component for ruby 'destory' action on the current controller
 * @param props
 * @returns
 */
const DeleteButton = (props: Props) => {
  return (
    <form action={props.action} acceptCharset="UTF-8" method="post">
      {/* pass anti-forgery token */}
      <input
        type="hidden"
        name="authenticity_token"
        value={props.token}
      ></input>
      <input name="_method" type="hidden" value="delete" />
      <Button type="submit">{props.children}</Button>
    </form>
  )
}

export default DeleteButton
