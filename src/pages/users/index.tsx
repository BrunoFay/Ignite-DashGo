import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { Plus } from 'phosphor-react'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'

export default function Users() {
  return (
    <Box>
      <Header />
      <Flex maxW={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>
            <Button
              as="a"
              size="sm"
              colorScheme="green"
              fontSize={15}
              leftIcon={<Icon as={Plus} />}
            >
              New User
            </Button>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px={6} color="gray.300" width={8}>
                  <Checkbox colorScheme="orange" />
                </Th>
                <Th>User</Th>
                <Th>Crated At</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="orange" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Bruno Fay</Text>
                    <Text color="gray.300" fontSize="small">
                      brunofay1@hotmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Text> April 18, 1996</Text>
                </Td>
                <Td>
                  <Button as="a" size="sm" colorScheme="red" fontSize={16}>
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
