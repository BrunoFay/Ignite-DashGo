import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import Notifications from './Notifications'
import Profile from './Profile'
import SearchInput from './SearchInput'

export default function Header() {
  const isVisible = useBreakpointValue({
    base: false,
    lg: true,
  })
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

      {isVisible && <SearchInput />}

      <Notifications />

      <Profile showProfileData={isVisible!} />
    </Flex>
  )
}
