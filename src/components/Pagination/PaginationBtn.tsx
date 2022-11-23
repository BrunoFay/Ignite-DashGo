import { Button } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
  isCurrent?: boolean
  number: number
}
export default function PaginationBtn({
  isCurrent = false,
  number,
}: ButtonProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}
