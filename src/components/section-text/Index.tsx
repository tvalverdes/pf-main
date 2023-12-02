import { SectionTextProps } from '@/types/constants'

export const SectionText = (props: SectionTextProps) => {
  return (
    <>
      <h2 className="section-header">{props.header}</h2>
      <h2 className="text-4xl">
        {props.leftText} <strong>{props.highlightedText}</strong>{' '}
        {props.rightText}
      </h2>
      <p className="text-xl">{props?.paragraph}</p>
    </>
  )
}
