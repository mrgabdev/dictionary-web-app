import { ButtonPlay, PhoneticWord, Section } from '@/word'
import { Metadata } from 'next'
import style from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { DictionaryApiDictionaryRepository } from '@/word/infraestructure/DictionaryApiDictionaryRepository'

interface Props {
  params: {
    word: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Web Dictionary - ${
      params.word.charAt(0).toUpperCase() + params.word.slice(1, params.word.length)
    }`,
    description: `Page of ${params.word} meaning`
  }
}

// const getWord = async (name: String): Promise<Word> => {
//   const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
//     // cache: 'force-cache',
//     next: {
//       revalidate: 60 * 60 * 30 * 6
//     }
//   }).then((response) => response.json())

//   return pokemon
// }

export default async function WordPage({ params }: Props) {
  const api = new DictionaryApiDictionaryRepository()

  const word = await api.search(params.word)

  if (!word.word) {
    notFound()
  }

  return (
    <main className='container'>
      <header className={style.header}>
        <div>
          <h1>{word.word}</h1>
          <PhoneticWord word='/&#712;ki&#720;bɔ&#720;d/' />
        </div>
        <ButtonPlay word={word.word} />
      </header>
      <Section sectionName={'noun'}>
        <section>
          <h3>meaning</h3>
          <ul className={style.meaning__list}>
            <li className={style.noun__meaning}>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li className={style.noun__meaning}>
              A component of many instruments including the piano, organ, and harpsichord consisting
              of usually black and white keys that cause different tones to be produced when struck.
            </li>
            <li className={style.noun__meaning}>
              A device with keys of a musical keyboard, used to control electronic sound-producing
              devices which may be built into or separate from the keyboard device.
            </li>
          </ul>
        </section>

        <section className={style.synonyms__section}>
          <h3>synonyms</h3>
          <ul className={style.synonyms__list}>
            <li className={style['synonyms__list-item']}>electronic keyboard</li>
            <li className={style['synonyms__list-item']}>electronic keyboard</li>
            <li className={style['synonyms__list-item']}>electronic keyboard</li>
            <li className={style['synonyms__list-item']}>electronic keyboard</li>
          </ul>
        </section>
      </Section>
      <Section sectionName={'verb'}>
        <section>
          <h3>meaning</h3>
          <ul className={style.meaning__list}>
            <li>
              <p>To type on a computer keyboard.</p>
              <p>“Keyboarding is the part of this job I hate the most.”</p>
            </li>
          </ul>
        </section>
      </Section>

      <hr className='section-divider section-divider--bottom' />

      <footer className={style.footer}>
        <h4>Source</h4>
        <Link
          target='_blank'
          href={'/'}
          className={style['footer__source-link']}
          rel='noopener noreferrer'
        >
          https://en.wiktionary.org/wiki/keyboard
          <Image src='/icon-new-window.svg' alt='new page' width={12} height={12} />
        </Link>
      </footer>
    </main>
  )
}
