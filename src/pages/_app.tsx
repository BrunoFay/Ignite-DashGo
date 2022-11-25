import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import NavbarProvider from '../context/NavbarContext'
import { makeServer } from '../libs/Miragejs'
import { queryClient } from '../libs/ReactQuery'
import { roboto, theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    makeServer()
  }

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
