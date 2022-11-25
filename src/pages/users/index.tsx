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
} from '@chakra-ui/react'
import Link from 'next/link'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'
import { useUsers } from '../../hooks/useUsers'

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error, isRefetching } = useUsers(currentPage)

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

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
                          <Text fontWeight="bold">{user.name}</Text>
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
