import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import ActiveLink from '../ActiveLink'

interface CategoryLinksProps extends LinkProps {
  children: string
  icon: ElementType
  href: string
}
export default function CategoryLink({
  children,
  icon,
  href,
  ...props
}: CategoryLinksProps) {
  return (
    <ActiveLink href={href}>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize={20} />
        <Text ml="4" fontWeight="bold">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
