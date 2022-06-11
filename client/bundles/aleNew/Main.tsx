import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'
import AleForm from '../app/components/AleForm'
import BackgroundImage from '../app/components/BackgroundImage'
import type { Ale } from '../app/types/ale'

type Props = {
  ale: Ale
  token: string
}

const Main = (props: Props) => {
  return (
    <Box padding={4} backgroundColor={'white'} borderRadius="10px">
      <AleForm {...props} />
    </Box>
  )
}

export default Main
