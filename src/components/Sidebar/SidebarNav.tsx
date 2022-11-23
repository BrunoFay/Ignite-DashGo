import { Stack } from '@chakra-ui/react'
import React from 'react'
import CategoryContainer from './CategoryContainer'
import CategoryLink from './CategoryLink'
import { ClipboardText, DiamondsFour, Robot, UserList } from 'phosphor-react'

export default function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <CategoryContainer name="GENERAL">
        <CategoryLink href="/dashboard" icon={DiamondsFour}>
          Dashboard
        </CategoryLink>
        <CategoryLink href="/users" icon={UserList}>
          Users
        </CategoryLink>
      </CategoryContainer>

      <CategoryContainer name="AUTOMATION">
        <CategoryLink href="/forms" icon={ClipboardText}>
          Forms
        </CategoryLink>
        <CategoryLink href="/automation" icon={Robot}>
          Automation
        </CategoryLink>
      </CategoryContainer>
    </Stack>
  )
}
