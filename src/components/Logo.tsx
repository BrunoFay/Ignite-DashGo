import React from 'react'
import { Text } from '@chakra-ui/react'
export default function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontFamily="Roboto"
      fontWeight="bold"
      w={64}
      letterSpacing="tight"
    >
      Dash
      <Text as="span" color="orange.500">
        G
      </Text>
      o
      <Text as="span" ml="1" color="orange.500">
        .
      </Text>
    </Text>
  )
}
