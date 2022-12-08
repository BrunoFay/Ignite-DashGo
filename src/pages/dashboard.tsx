import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { HeaderComponent } from '../components/Header'
import Sidebar from '../components/Sidebar'
import { theme } from '../styles/theme'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-11-11T00:00:00.000Z',
      '2022-11-12T00:00:00.000Z',
      '2022-11-13T00:00:00.000Z',
      '2022-11-14T00:00:00.000Z',
      '2022-11-15T00:00:00.000Z',
      '2022-11-16T00:00:00.000Z',
      '2022-11-17T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    colors: [theme.colors.orange[500]],
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}
const options2: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      'Nature',
      'Science',
      'Sports',
      'Technology',
      'Cars',
      'Culinary',
      'Geek',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    colors: [theme.colors.orange[500]],
  },
}
const series = [{ name: 'subscriptions', data: [21, 34, 55, 31, 2, 52, 11] }]

export default function Dashboard() {
  return (
    <Flex h="100vh" direction="column">
      <HeaderComponent />
      <Flex maxW={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex={1} gap="4" minChildWidth="320px">
          <Box p={['2', '8']} bg="gray.800" borderRadius="8" pb="4">
            <Text fontSize="lg" mb="4">
              New Subscribers of the week
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={['2', '8']} bg="gray.800" borderRadius="8" pb="4">
            <Text fontSize="lg" mb="4">
              Most viewed categories of the week
            </Text>
            <Chart
              options={options2}
              series={series}
              type="histogram"
              height={200}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
