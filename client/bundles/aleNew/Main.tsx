import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'
import AleForm from '../app/components/AleForm'
import { Ale } from '../app/types/ale'

type Props = {
  ale: Ale
  token: string
}

const Main = (props: Props) => {
  return (
    <Flex
      as="main"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
    >
      <Box padding={4} backgroundColor={'white'} borderRadius="10px">
        <AleForm {...props} />
      </Box>
    </Flex>
  )
}

export default Main
