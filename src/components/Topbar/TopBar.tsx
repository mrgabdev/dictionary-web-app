import Image from 'next/image'
import style from './TopBar.module.scss'
import fontMenu from '@/assets/graphics/icon-arrow-down.svg'
import { DarkModeToggle } from './DarkModeToggle'
import { FontSelector } from './FontSelector'

export const TopBar = () => {
  return (
    <header className={style.container}>
      <section className={style.header}>
        <Image
          className={style.header__logo}
          width={28}
          height={32}
          src='/logo.svg'
          alt='dictionary'
        />

        <div className={style.header__content}>
          <FontSelector />
          <hr className={style.divider} />
          <DarkModeToggle />
        </div>
      </section>
    </header>
  )
}
