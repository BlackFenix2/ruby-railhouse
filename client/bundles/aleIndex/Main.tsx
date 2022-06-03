import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { css } from '@emotion/css'
import * as React from 'react'
import { useAppContext } from '../app/state/useAppContext'

type Props = {
  aleList: [
    {
      id: number
      title: string
      description: string
      price: number
      imageUrl: string
    }
  ]
}

const Main = (props: Props) => {
  const [name, setName] = React.useState('stranger')

  const value = useAppContext()

  return (
    <Flex
      as="main"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
    >
      <Box backgroundColor={'white'} borderRadius="10px" padding={4}>
        <Heading as="h3">
          Hello Stranger! The Alehouse is opening soon in the Ruby Railhouse!
        </Heading>

        {props.aleList.map((ale) => (
          <Box>
            <Heading as="h3">{ale.title}</Heading>
            <Text>{ale.description}</Text>
            <Text>{ale.price}</Text>
            <Text>{ale.imageUrl}</Text>
          </Box>
        ))}
        <Text>{JSON.stringify(props.aleList, null, 4)}</Text>
        <Text>{JSON.stringify(value, null, 4)}</Text>
      </Box>
    </Flex>
  )
}

export default Main
