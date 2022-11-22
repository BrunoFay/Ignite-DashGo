import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Pagination() {
  return (
    <HStack spacing={6} mt={8} justify="space-between" align="center">
      <Box fontSize="sm">
        <Text as="span">0</Text> - <Text as="span">10</Text> of{' '}
        <Text as="span">100</Text>
      </Box>
      <HStack spacing={2}>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="orange"
          disabled
          _disabled={{
            bg: 'orange.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
        >
          3
        </Button>
      </HStack>
    </HStack>
  )
}
