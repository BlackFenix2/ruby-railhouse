import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
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
            <Heading as="h3" textTransform={'uppercase'}>
              {ale.title}
            </Heading>
            <Text>{ale.description}</Text>
            <Text>{ale.price}</Text>
            <Text>{ale.imageUrl}</Text>
            <Divider paddingY={2}></Divider>
            <ButtonGroup>
              <Button as="a" href={`/ale/${ale.id}`}>
                View
              </Button>
              <Button as="a" href={`/ale/${ale.id}/edit`}>
                Edit
              </Button>
            </ButtonGroup>
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default Main
