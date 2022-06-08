import { Box } from '@chakra-ui/react'
import * as React from 'react'
import AleForm from '../app/components/AleForm'
import { Ale } from '../app/types/ale'

type Props = {
  ale: Ale
  token: string
}

const Main = (props: Props) => {
  return (
    <Box padding={2} backgroundColor={'white'}>
      <AleForm {...props} />
    </Box>
  )
}

export default Main
