import style from './Section.module.scss'

interface Props {
  sectionName: string
  children: React.ReactNode
}

export const Section = ({ sectionName, children }: Props) => {
  return (
    <section className={style['section-container']}>
      <h2 className={style['section-title']}>
        {sectionName}
        <hr className='section-divider' />
      </h2>
      {children}
    </section>
  )
}
