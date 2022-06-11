import * as React from 'react'
import Layout from './layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Context } from './state/context'

export interface AppProps {
  children: React.ReactNode
  railsContext: any
}

const theme = extendTheme({})

const AppContainer = (props: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Context.Provider value={{ ...props.railsContext }}>
        <Layout>{props.children}</Layout>
      </Context.Provider>
    </ChakraProvider>
  )
}

export default AppContainer
