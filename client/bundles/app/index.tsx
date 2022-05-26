import * as React from 'react'
import App from './layout'
import { ChakraProvider } from '@chakra-ui/react'

const AppContainer = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default AppContainer
