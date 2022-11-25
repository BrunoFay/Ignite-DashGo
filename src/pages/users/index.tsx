import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'
import { useUsers } from '../../hooks/useUsers'
import { Api } from '../../libs/Axios'
import { queryClient } from '../../libs/ReactQuery'

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error, isRefetching } = useUsers(currentPage)

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  async function handlePreFetching(userId: string) {
    await queryClient.prefetchQuery(
      ['users', userId],
      async function () {
        const response = await Api.get(`users/${userId}`)
        return response.data
      },
      {
        staleTime: 1000 * 60 * 10, // 10 min
      },
    )
  }

  return (
    <>
      <Header />
      <Flex maxW={1480} w="100%" my="6" mx="auto" px={['3', '3', '6']}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '4', '8']}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
              {isRefetching && <Spinner ml="4" size="sm" />}
            </Heading>
            <Link href="/users/create">
              <Button
                size={['xs', 'sm']}
                colorScheme="green"
                fontSize={15}
                leftIcon={<Icon as={Plus} />}
              >
                New User
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              {' '}
              <Spinner />
            </Flex>
          ) : error ? (
            <Text>Fetch Error, wait a few minutes </Text>
          ) : (
            <>
              <Table>
                <Thead>
                  <Tr>
                    <Th px={6} color="gray.300" width={8}>
                      <Checkbox colorScheme="orange" />
                    </Th>
                    <Th>User</Th>
                    <Th>Crated At</Th>
                    {!isWideVersion && <Th></Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map((user: any) => (
                    <Tr key={user.id}>
                      <Td>
                        <Checkbox colorScheme="orange" />
                      </Td>
                      <Td>
                        <Box>
                          <Link href={`/users/${user.id}`} className="pink-500">
                            {' '}
                            <ChakraLink
                              color="blue.300"
                              onMouseEnter={() => handlePreFetching(user.id)}
                              fontWeight="bold"
                            >
                              {user.name}
                            </ChakraLink>
                          </Link>
                          <Text color="gray.300" fontSize="small">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      <Td>
                        <Text fontSize={['sm', 'md']}> {user.createdAt}</Text>
                      </Td>
                      {!isWideVersion && (
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            colorScheme="red"
                            fontSize={16}
                          >
                            Edit
                          </Button>
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination
                totalNumberRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </>
  )
}
