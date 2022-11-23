import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import PaginationBtn from './PaginationBtn'

export default function Pagination() {
  return (
    <Stack
      spacing={6}
      mt={8}
      justify="space-between"
      align="center"
      direction={['column', 'row']}
    >
      <Box fontSize="sm">
        <Text as="span">0</Text> - <Text as="span">10</Text> of{' '}
        <Text as="span">100</Text>
      </Box>
      <HStack spacing={2}>
        <PaginationBtn number={1} isCurrent />
        <PaginationBtn number={2} />
        <PaginationBtn number={3} />
        <PaginationBtn number={4} />
        <PaginationBtn number={5} />
      </HStack>
    </Stack>
  )
}
