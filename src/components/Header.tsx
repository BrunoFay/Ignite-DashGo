import { Flex, Icon, Input, Text } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" w={64} letterSpacing="tight">
        Dash
        <Text as="span" color="orange.500">
          G
        </Text>
        o
        <Text as="span" ml="1" color="orange.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        pos="relative"
        bg="gray.800"
        borderRadius="full"
        color="gray.200"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search on platform"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon fontSize={23}>
          <MagnifyingGlass />
        </Icon>
      </Flex>
    </Flex>
  )
}
