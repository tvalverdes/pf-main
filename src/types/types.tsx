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
  img: string
  name: string
  description: string
}

export type TopicsList = Omit<ItemList, 'img'>

export type ReputationList = Omit<ItemList, 'icon' | 'img'>

export type StatisticsList = Omit<ItemList, 'img'>

export type TestimonialsList = {
  image: string
  name: string
  job: string
  rate: number
  comment: string
}

export type BooksList = {
  image: string
  name: string
  href: string
}

export type SocialsList = Omit<ItemList, 'img' | 'description'> & {
  href: string
}

export type GoalsList = Omit<ItemList, 'icon'>

export type TeamList = Omit<ItemList, 'icon'>
