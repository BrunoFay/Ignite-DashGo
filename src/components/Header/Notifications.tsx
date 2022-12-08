import { Flex, HStack, Icon } from '@chakra-ui/react'
import { Bell, UserPlus } from 'phosphor-react'
import React from 'react'

export default function Notifications() {
  return (
    <Flex ml="auto">
      <HStack
        spacing={4}
        mx={['6', '8']}
        pr={['6', '8']}
        py="1"
        borderRightWidth={1}
        color="gray.200"
      >
        <Icon data-testid="icon" fontSize={20} as={Bell} />
        <Icon data-testid="icon" fontSize={20} as={UserPlus} />
      </HStack>
    </Flex>
  )
}
