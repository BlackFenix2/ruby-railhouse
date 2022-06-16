import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import * as React from 'react'
import { FaTrash } from 'react-icons/fa'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  return (
    <>
      <Button onClick={onOpen} leftIcon={<FaTrash />}>
        {props.children}
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Ale
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <form action={props.action} acceptCharset="UTF-8" method="post">
                {/* pass anti-forgery token */}
                <input
                  type="hidden"
                  name="authenticity_token"
                  value={props.token}
                ></input>
                <input name="_method" type="hidden" value="delete" />
                <Button
                  type="submit"
                  leftIcon={<FaTrash />}
                  colorScheme="red"
                  ml={3}
                >
                  Delete
                </Button>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteButton
