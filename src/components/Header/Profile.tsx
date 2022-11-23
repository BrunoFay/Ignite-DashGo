import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Fay</Text>
        <Text color="gray.300" fontSize="small">
          brunofay1@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Bruno Fay"
        src="https://github.com/brunofay.png"
      />
    </Flex>
  )
}
