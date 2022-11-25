import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinksProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}
export default function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...linkProps
}: ActiveLinksProps) {
  let isActive = false
  const { asPath } = useRouter()

  if (
    shouldMatchExactHref &&
    (asPath === linkProps.href || asPath === linkProps.as)
  ) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(linkProps.href)) ||
      asPath.startsWith(String(linkProps.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...linkProps}>
      {cloneElement(children, {
        color: isActive ? 'orange.400' : 'gray.50',
      })}
    </Link>
  )
}
