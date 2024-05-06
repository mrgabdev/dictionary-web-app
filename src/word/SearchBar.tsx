import style from './SearchBar.module.scss'

export const SearchBar = () => {
  return (
    <section className={`container ${style['search-container']}`}>
      <input className={style['search-bar']} type='text' />
    </section>
  )
}
