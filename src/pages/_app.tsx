import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { roboto, theme } from '../styles/theme'
import NavbarProvider from '../context/NavbarContext'
import { makeServer } from '../libs/Miragejs'

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    makeServer()
  }

  return (
    <ChakraProvider theme={theme}>
      <NavbarProvider>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </NavbarProvider>
    </ChakraProvider>
  )
}
