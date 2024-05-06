import style from './not-found.module.scss'

export default function NotFound() {
  return (
    <section className='container'>
      <div className={style['not-found__wrapper']}>
        <p className={style['not-found__emoji']}>😕</p>
        <h1 className={style['not-found__title']}>No Definitions Found</h1>
        <p className={style['not-found__text']}>
          Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You can
          try the search again at later time or head to the web instead.
        </p>
      </div>
    </section>
  )
}
