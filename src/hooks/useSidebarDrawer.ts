import { useContext } from 'react'
import { NavbarContext } from '../context/NavbarContext'

export function useSidebarDrawer() {
  const disclosure = useContext(NavbarContext)
  return { ...disclosure }
}
