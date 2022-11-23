import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { roboto, theme } from '../styles/theme'
import NavbarProvider from '../context/NavbarContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavbarProvider>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </NavbarProvider>
    </ChakraProvider>
  )
}
