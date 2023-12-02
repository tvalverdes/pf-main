import { socialsList } from '@/types/constants'

export const Socials = () => {
  return (
    <>
      {socialsList.map((social, index) => {
        return (
          <li key={index} className="flex items-center gap-2">
            <a
              href={social.href}
              className="text-2xl"
              rel="noopener noreferrer"
              target="_blank"
            >
              {social.icon}
            </a>
            <a
              href={social.href}
              className="nav__link"
              rel="noopener noreferrer"
              target="_blank"
            >{`Síguenos en ${social.name}`}</a>
          </li>
        )
      })}
    </>
  )
}
