import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { roboto, theme } from '../styles/theme'
import NavbarProvider from '../context/NavbarContext'
import { makeServer } from '../libs/Miragejs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    makeServer()
  }
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <NavbarProvider>
          <div className={roboto.className}>
            <Component {...pageProps} />
          </div>
        </NavbarProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
