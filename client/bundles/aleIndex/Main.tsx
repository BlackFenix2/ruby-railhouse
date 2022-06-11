import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
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
import BackgroundImage from '../app/components/BackgroundImage'

type Props = {
  aleList: Ale[]
}

const Main = (props: Props) => {
  return (
    <Box width={'100%'} backgroundColor="white">
      <BackgroundImage width="100%" height="500px">
        <Center flexDirection={'column'} height="100%">
          <Card
            display="flex"
            flexDirection="column"
            alignItems={'center'}
            backgroundColor="blackAlpha.800"
            color={'white'}
            padding={4}
            border="none"
          >
            <Heading as="h1">Hello Stranger!</Heading>
            <Text marginBottom={2}>
              Welcome to the Ruby Railhouse, your best selection for ruby-themed
              ale
            </Text>
          </Card>
        </Center>
      </BackgroundImage>

      <Container
        backgroundColor={'white'}
        borderRadius="10px"
        padding={4}
        maxWidth="container.xl"
      >
        <Flex alignItems={'center'} justifyContent="space-around">
          <Heading as="h1" marginBottom={2}>
            Ale List
          </Heading>
          <Button as="a" href="/ale/new" leftIcon={<FaPlus />}>
            New Drink!
          </Button>
        </Flex>

        <Wrap paddingY={2}>
          {props.aleList.map((ale) => (
            <WrapItem maxWidth={'400px'} key={ale.id}>
              <Card>
                <Image
                  src={ale?.imageUrl ?? 'https://via.placeholder.com/400/600'}
                  alt={`${ale?.title} image`}
                  htmlWidth={'600px'}
                  minWidth={'400px'}
                  maxWidth={'400px'}
                  htmlHeight={'400px'}
                  minHeight={'600px'}
                  maxHeight={'600px'}
                ></Image>
                <Heading as="h2" padding={2} textTransform={'uppercase'}>
                  {ale.title}
                </Heading>
                <Box
                  padding={2}
                  display="flex"
                  flexDirection={'column'}
                  width="100%"
                >
                  <Text noOfLines={1}>{ale.description}</Text>
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
      </Container>
    </Box>
  )
}

export default Main
