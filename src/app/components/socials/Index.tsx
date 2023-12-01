import { socialsList } from '@/app/types/constants'

export const Socials = () => {
  return (
    <>
      {socialsList.map((social, index) => {
        return (
          <li key={index} className="flex items-center gap-2">
            <a href="" className="text-2xl">
              {social.icon}
            </a>
            <a
              href={social.href}
              className="nav__link"
            >{`Síguenos en ${social.name}`}</a>
          </li>
        )
      })}
    </>
  )
}
