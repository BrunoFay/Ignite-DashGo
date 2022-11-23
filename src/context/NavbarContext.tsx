import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, PropsWithChildren, useEffect } from 'react'

export const NavbarContext = createContext({} as UseDisclosureReturn)

export default function NavbarProvider({ children }: PropsWithChildren) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <NavbarContext.Provider value={{ ...disclosure }}>
      {children}
    </NavbarContext.Provider>
  )
}
