import Link from 'next/link'
import { webLinks } from '../../types/constants'

type Props = {
  className?: string
}
export const WebLinks = (props: Props) => {
  return (
    <>
      {webLinks.map((link, index) => {
        return (
          <li
            key={index}
            className={`${props.className ? props.className : 'w-fit'}`}
          >
            <Link href={link.path} className="nav__link">
              {link.name}
            </Link>
          </li>
        )
      })}
    </>
  )
}
