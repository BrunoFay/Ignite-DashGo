import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {roboto, theme} from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>

      <main className={roboto.className}>
      <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
