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
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Plus } from 'phosphor-react'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'
import { Api } from '../../libs/Axios'

interface UserApi {
  id: string
  name: string
  email: string
  createdAt: string
}
export default function Users() {
  async function fetchUsersList(): Promise<UserApi[]> {
    const { data } = await Api('http://localhost:3000/api/users')
    const users = data.users.map((user: any) => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
        dateStyle: 'long',
      }),
    }))
    return users
  }
  const { data, isLoading, error, isRefetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsersList,
  })

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
                  {data?.map((user: any) => (
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
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </>
  )
}
