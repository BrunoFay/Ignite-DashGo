import { Flex, Icon, Input } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'

export default function SearchInput() {
  return (
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
      <Icon as={MagnifyingGlass} fontSize={23} />
    </Flex>
  )
}
