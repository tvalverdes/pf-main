import { ReactComponentElement } from 'react'
import { IconType } from 'react-icons'

export type WebLinks = {
  name: string
  path: string
}

export type SectionTextProps = {
  section: string
  header: string
  leftText: string
  highlightedText: string
  rightText: string
  paragraph: string
}

export type ItemList = {
  icon: ReactComponentElement<IconType>
  title: string
  description: string
}

export type ReputationList = Omit<ItemList, 'icon'>

export type TestimonialsList = {
  image: string
  name: string
  job: string
  rate: number
  comment: string
}

export type BooksList = {
  image: string
  title: string
  href: string
}

export type SocialsList = Pick<ItemList, 'icon'> & {
  name: string
  href: string
}
