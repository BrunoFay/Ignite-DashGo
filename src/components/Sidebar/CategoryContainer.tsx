import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CategoryProps {
  name: string
  children: ReactNode
}

export default function CategoryContainer({ name, children }: CategoryProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {name}{' '}
      </Text>
      <Stack align="stretch" mt="8" spacing="4">
        {children}
      </Stack>
    </Box>
  )
}
