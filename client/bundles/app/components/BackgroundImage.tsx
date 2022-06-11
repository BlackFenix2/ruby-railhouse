import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import * as React from 'react'

const BackgroundImage: React.FunctionComponent<BoxProps> = (props) => {
  return (
    <Box
      backgroundImage="url(/background.jpg)"
      backgroundPosition="center"
      backgroundSize={'cover'}
      backgroundRepeat="no-repeat"
      {...props}
    >
      {props.children}
    </Box>
  )
}

export default BackgroundImage
