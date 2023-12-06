'use client'
import { webLinks } from '@/types/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  className?: string
  hideMenu?: () => void
}
export const WebLinks = (props: Props) => {
  const currentRoute = usePathname()
  return (
    <>
      {webLinks.map((link, index) => {
        return (
          <li
            key={index}
            className={`${props.className ? props.className : 'w-fit'}`}
          >
            <Link
              href={link.path === currentRoute ? '' : link.path}
              onClick={props.hideMenu}
              className={`nav__link ${
                link.path === currentRoute ? 'active' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </>
  )
}
