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
import AleForm from '../app/components/AleForm'
import { useAppContext } from '../app/state/useAppContext'
import type { Ale } from '../app/types/ale'

type Props = {
  ale: Ale
  token: string
}

const Main = (props: Props) => {
  const { ale } = props
  console.log(props.token)
  return (
    <Flex
      as="main"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
    >
      <Box backgroundColor={'white'} borderRadius="10px" padding={4}>
        <AleForm
          ale={props.ale}
          token={props.token}
          method="patch"
          action={`/ale/${props.ale.id}`}
        ></AleForm>
      </Box>
    </Flex>
  )
}

export default Main
