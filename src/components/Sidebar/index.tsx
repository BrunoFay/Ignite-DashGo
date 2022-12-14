import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'
import Logo from '../Logo'
import SidebarNav from './SidebarNav'

export default function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isSidebarVisible = useBreakpointValue({
    base: true,
    lg: false,
  })
  if (isSidebarVisible) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>
              <Logo />
            </DrawerHeader>
            <DrawerBody mt="6">
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
