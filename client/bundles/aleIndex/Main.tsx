import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
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
        <Button as="a" href="/ale/new">
          New Drink!
        </Button>

        {props.aleList.map((ale) => (
          <Box>
            <Heading as="h3" textTransform={'uppercase'}>
              {ale.title}
            </Heading>
            <Image
              src={ale?.imageUrl ?? 'https://via.placeholder.com/300'}
              width={'300px'}
            ></Image>
            <Text>{ale.description}</Text>
            <Text>{ale.price}</Text>

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
