import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import * as React from 'react'
import Card from '../app/components/Card'
import { FaPen, FaEye, FaPlus } from 'react-icons/fa'
import type { Ale } from '../app/types/ale'

type Props = {
  aleList: Ale[]
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
        <Heading as="h3" marginBottom={2}>
          Hello Stranger! Welcome to the Ruby Railhouse, your best selection for
          ruby-themed ale
        </Heading>
        <Button as="a" href="/ale/new" leftIcon={<FaPlus />}>
          New Drink!
        </Button>

        <Wrap paddingY={2}>
          {props.aleList.map((ale) => (
            <WrapItem maxWidth={'400px'}>
              <Card>
                <Image
                  src={ale?.imageUrl ?? 'https://via.placeholder.com/300'}
                  width={'400px'}
                ></Image>
                <Heading as="h3" padding={2} textTransform={'uppercase'}>
                  {ale.title}
                </Heading>
                <Box
                  padding={2}
                  display="flex"
                  flexDirection={'column'}
                  width="100%"
                >
                  <Text>{ale.description}</Text>
                  <Text fontWeight={'bold'}>{`$${Number(ale.price).toFixed(
                    2
                  )}`}</Text>
                </Box>

                <Divider></Divider>
                <ButtonGroup padding={2}>
                  <Button as="a" href={`/ale/${ale.id}`} leftIcon={<FaEye />}>
                    View
                  </Button>
                  <Button
                    as="a"
                    href={`/ale/${ale.id}/edit`}
                    leftIcon={<FaPen />}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </Card>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  )
}

export default Main
