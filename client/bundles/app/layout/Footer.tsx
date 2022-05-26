import { Box, Center, Text } from '@chakra-ui/react'
import { css } from '@emotion/css'
import * as React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box as="footer">
      <hr />

      <Center>
        <Text> Ruby Railhouse &copy; {new Date().getFullYear()}</Text>
      </Center>
    </Box>
  )
}

export default Footer
