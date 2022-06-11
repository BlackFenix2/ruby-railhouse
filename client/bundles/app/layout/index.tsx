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
      <Flex
        as="main"
        flexDirection="column"
        alignItems={'center'}
        justifyContent={'center'}
        flexGrow={1}
        backgroundImage="url(/background.jpg)"
        backgroundPosition="center"
        backgroundSize={'cover'}
        backgroundRepeat="no-repeat"
      >
        {props.children}
      </Flex>

      <Footer />
    </Flex>
  )
}

export default Layout
