import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import InputDefault from '../../components/form/Input'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function Users() {
  return (
    <Box>
      <Header />
      <Flex maxW={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '8']}>
          <Heading size="lg" fontWeight="normal">
            Create new User
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <Stack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <InputDefault placeholder="" name="name" label="Full name" />
              <InputDefault
                placeholder="example@example.com"
                name="email"
                type="email"
                label="Email"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <InputDefault
                placeholder="******"
                name="password"
                type="password"
                label="Password"
              />
              <InputDefault
                label="Confirm password"
                placeholder="******"
                type="password"
                name="password_confirmation"
              />
            </SimpleGrid>
          </Stack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button size={['sm', 'md']} colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button size={['sm', 'md']} colorScheme="green">
                Create
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
