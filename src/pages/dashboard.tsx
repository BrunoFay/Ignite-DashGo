import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex maxW={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  )
}
