import { Box, Center, Link, Text, Tooltip } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box as="footer" backgroundColor={'#333'} color="white" padding={'1em'}>
      <Center flexDirection={'column'}>
        <Tooltip label="GitHub">
          <Link
            href="https://github.com/BlackFenix2/ruby-railhouse"
            isExternal
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </Link>
        </Tooltip>
        <Text marginRight={4}>
          {' '}
          Ruby Railhouse &copy; {new Date().getFullYear()}
        </Text>
      </Center>
    </Box>
  )
}

export default Footer
