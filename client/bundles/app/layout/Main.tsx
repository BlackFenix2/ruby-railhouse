import { Box, Flex, Heading } from '@chakra-ui/react'
import { css } from '@emotion/css'
import * as React from 'react'
import Header from './Header'

type Props = {}

const Main = (props: Props) => {
  const [name, setName] = React.useState('stranger')

  return (
    <Flex
      as="main"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
    >
      <Box backgroundColor={'white'} borderRadius="10px" padding={4}>
        <Heading as="h3">
          Hello Stranger! The Alehouse is opening soon in the Ruby Railhouse!
        </Heading>
      </Box>
    </Flex>
  )
}

export default Main
