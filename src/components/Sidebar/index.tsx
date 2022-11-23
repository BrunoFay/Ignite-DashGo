import { Box, Stack } from '@chakra-ui/react'
import { ClipboardText, DiamondsFour, Robot, UserList } from 'phosphor-react'
import CategoryContainer from './CategoryContainer'
import CategoryLink from './CategoryLink'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing={12} align="flex-start">
        <CategoryContainer name="GENERAL">
          <CategoryLink icon={DiamondsFour}>Dashboard</CategoryLink>
          <CategoryLink icon={UserList}>Users</CategoryLink>
        </CategoryContainer>

        <CategoryContainer name="AUTOMATION">
          <CategoryLink icon={ClipboardText}>Forms</CategoryLink>
          <CategoryLink icon={Robot}>Automation</CategoryLink>
        </CategoryContainer>
      </Stack>
    </Box>
  )
}
