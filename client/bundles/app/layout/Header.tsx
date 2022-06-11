import { Box, Center, Heading } from '@chakra-ui/react'
import * as React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <Box
      as="header"
      backgroundColor={'#333'}
      color={'white'}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Box as="nav" height={'100%'} padding={'1em'}>
        <Center>
          <Heading as="h1">Ruby's Railhouse</Heading>
        </Center>
      </Box>
    </Box>
  )
}

export default Header
