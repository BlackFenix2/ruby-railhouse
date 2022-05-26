import { Box, Center, Heading } from '@chakra-ui/react'
import { css } from '@emotion/css'
import * as React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <Box as="header" backgroundColor={'#333'} color={'white'}>
      <Box as="nav" height={'100%'} padding={'1em'}>
        <Heading as="h1">Ruby's R(ale) House</Heading>
      </Box>
    </Box>
  )
}

export default Header
