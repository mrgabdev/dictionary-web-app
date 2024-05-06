'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import style from './SearchBar.module.scss'
import { useRouter } from 'next/navigation'

export const SearchBar = () => {
  const router = useRouter()
  const [word, setWord] = useState<String | null>(null)
  const [empty, setEmpty] = useState<boolean>(false)

  const onSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!word) return setEmpty(true)

    router.push(`/word/${word}`)
  }

  const onTypeWord = (e: ChangeEvent<HTMLInputElement>): void => {
    setWord(e.target.value)
  }

  return (
    <section className={`container ${style['search-container']}`}>
      <form className={style.search__form} onSubmit={onSearch}>
        <fieldset className={style.search__fieldset}>
          <input
            onChange={onTypeWord}
            className={`${style.search__bar} ${empty && style['search__bar--error']}`}
            type='text'
            name='search-word'
            placeholder='Search for any word'
          />
          <button className={style.search__btn} type='submit'>
            <SearchIcon />
          </button>
        </fieldset>
        {empty && (
          <label className={style.search__error} htmlFor='search-word'>
            Whoops, can&apos;t be empty…
          </label>
        )}
      </form>
    </section>
  )
}

const SearchIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
      <path
        fill='none'
        stroke='#A445ED'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.663 12.663l3.887 3.887M1 7.664a6.665 6.665 0 1013.33 0 6.665 6.665 0 00-13.33 0z'
      ></path>
    </svg>
  )
}
