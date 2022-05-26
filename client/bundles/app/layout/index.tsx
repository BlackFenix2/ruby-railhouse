import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

type Props = {}

const Layout = (props: Props) => {
  return (
    <Flex direction={'column'} minH={'100vh'}>
      <Header />
      <Main />
      <Footer />
    </Flex>
  )
}

export default Layout
