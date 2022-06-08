import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import { css } from '@emotion/css'
import * as React from 'react'
import DeleteButton from '../app/components/DeleteButton'
import { useAppContext } from '../app/state/useAppContext'
import { Ale } from '../app/types/ale'

type Props = {
  ale: Ale
  token: string
}

const Main = (props: Props) => {
  const value = useAppContext()
  const { ale } = props

  return (
    <Flex
      as="main"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
    >
      <Box backgroundColor={'white'} borderRadius="10px" padding={4}>
        <Box>
          <Heading as="h3" textTransform={'uppercase'}>
            {ale.title}
          </Heading>
          <Text>{ale.description}</Text>
          <Text>{ale.price}</Text>
          <Text>{ale.imageUrl}</Text>
        </Box>
        <Box paddingY={2}>
          <Divider></Divider>
        </Box>
        <ButtonGroup>
          <Button as="a" href={`/ale/${ale.id}/edit`}>
            Edit
          </Button>
          <DeleteButton action={`/ale/${ale.id}`} token={props.token}>
            Delete
          </DeleteButton>

          <Button as="a" href="/">
            Go Back
          </Button>
        </ButtonGroup>
      </Box>
    </Flex>
  )
}

export default Main
