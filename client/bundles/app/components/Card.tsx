import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import * as React from 'react'

const Card: React.FunctionComponent<BoxProps> = (props) => {
  return (
    <Box border="1px solid #b5bdc4" rounded={'md'} {...props}>
      {props.children}
    </Box>
  )
}

export default Card
