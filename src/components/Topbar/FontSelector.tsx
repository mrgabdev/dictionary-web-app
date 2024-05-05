'use client'

import Image from 'next/image'
import { useSettingsContext } from '../context/SettingsContext'
import style from './FontSelector.module.scss'
import fontMenu from '@/assets/graphics/icon-arrow-down.svg'
import { useState } from 'react'

interface Font {
  name: string
  class: string
}

const fontsList: Font[] = [
  {
    name: 'sans serif',
    class: 'font-sans-serif'
  },
  {
    name: 'serif',
    class: 'font-serif'
  },
  {
    name: 'mono',
    class: 'font-mono'
  }
]

export const FontSelector = () => {
  const { font, changeFont } = useSettingsContext()
  const [open, setOpen] = useState(false)

  return (
    <div className={style.wrapper} onClick={() => setOpen((prev) => !prev)}>
      <p className={style['active-font']}>{font}</p>
      <Image src={fontMenu} alt='font menu' width={12} height={6} />
      {open ? (
        <section className={style.container}>
          <ul className={style.fonts}>
            {fontsList.map((font) => (
              <li
                key={font.name}
                className={style[font.class]}
                onClick={() => changeFont(font.name)}
              >
                {font.name}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
