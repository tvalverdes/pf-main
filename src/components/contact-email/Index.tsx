import { contactEmail } from '@/types/constants'

export const ContactEmail = () => {
  return (
    <a className="nav__link inline-block w-fit" href={`mailto:${contactEmail}`}>
      {contactEmail}
    </a>
  )
}
