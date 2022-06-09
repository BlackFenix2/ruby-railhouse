import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <Flex direction={'column'} minH={'100vh'}>
      <Header />
      {props.children}
      <Footer />
    </Flex>
  )
}

export default Layout
