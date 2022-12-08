import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { List } from 'phosphor-react'
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'
import Logo from '../Logo'
import Notifications from './Notifications'
import Profile from './Profile'
import SearchInput from './SearchInput'

export function HeaderComponent() {
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
      <Logo />

      {isWideVersion && <SearchInput />}

      <Notifications />

      <Profile showProfileData={isWideVersion!} />
    </Flex>
  )
}
