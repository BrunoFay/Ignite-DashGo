import { Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'

interface CategoryLinksProps extends LinkProps {
  children: string
  icon: ElementType
}
export default function CategoryLink({
  children,
  icon,
  ...props
}: CategoryLinksProps) {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize={20} />
      <Text ml="4" fontWeight="bold">
        {children}
      </Text>
    </Link>
  )
}
