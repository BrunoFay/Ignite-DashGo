import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react'
import { ClipboardText, DiamondsFour, Robot, UserList } from 'phosphor-react'
import React from 'react'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GENERAL{' '}
          </Text>
          <Stack align="stretch" mt="8" spacing="4">
            <Link display="flex" alignItems="center">
              <Icon as={DiamondsFour} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={UserList} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Users
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMATION{' '}
          </Text>
          <Stack align="stretch" mt="8" spacing="4">
            <Link display="flex" alignItems="center">
              <Icon as={ClipboardText} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Forms
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={Robot} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Automation
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
