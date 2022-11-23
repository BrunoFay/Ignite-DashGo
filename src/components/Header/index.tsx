import {
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { List } from 'phosphor-react'
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'
import Notifications from './Notifications'
import Profile from './Profile'
import SearchInput from './SearchInput'

export default function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={List} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="2"
        />
      )}
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

      {isWideVersion && <SearchInput />}

      <Notifications />

      <Profile showProfileData={isWideVersion!} />
    </Flex>
  )
}
