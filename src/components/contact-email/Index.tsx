import { contactEmail } from '@/types/constants'

export const ContactEmail = () => {
  return (
    <a className="nav__link lg:inline-block w-fit break-words max-w-sm lg:break-normal" href={`mailto:${contactEmail}`}>
      {contactEmail}
    </a>
  )
}
