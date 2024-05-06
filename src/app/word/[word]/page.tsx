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

export default async function WordPage({ params }: Props) {
  const api = new DictionaryApiDictionaryRepository()

  const dictionary = await api.search(params.word)

  if (!dictionary.word) {
    notFound()
  }

  return (
    <main className='container'>
      <header className={style.header}>
        <div>
          <h1>{dictionary.word}</h1>
          <PhoneticWord word={dictionary.phonetic} />
        </div>
        <ButtonPlay word={dictionary.word} />
      </header>
      <Section sectionName={'noun'}>
        <section>
          <h3>meaning</h3>
          <ul className={style.meaning__list}>
            {dictionary.nouns?.definitions?.map((meaning) => (
              <li key={meaning} className={style.noun__meaning}>
                {meaning}
              </li>
            ))}
          </ul>
        </section>

        <section className={style.synonyms__section}>
          <h3>synonyms</h3>
          <ul className={style.synonyms__list}>
            {dictionary.nouns?.synonyms?.map((synonym) => (
              <li key={synonym} className={style['synonyms__list-item']}>
                {synonym}
              </li>
            ))}
          </ul>
        </section>
      </Section>
      <Section sectionName={'verb'}>
        <section>
          <h3>meaning</h3>
          <ul className={style.meaning__list}>
            {dictionary.verbs?.map(({ definition, example }) => (
              <li key={definition} className={style.noun__meaning}>
                <p>{definition}</p>
                {example && <p className={style.meaning__example}>“{example}”</p>}
              </li>
            ))}
          </ul>
        </section>
      </Section>

      <hr className='section-divider section-divider--bottom' />

      <footer className={style.footer}>
        <h4>Source</h4>
        <ul className={style['footer__source-list']}>
          {dictionary.sourceUrls.map((source) => (
            <Link
              key={source}
              target='_blank'
              href={source}
              className={style['footer__source-link']}
              rel='noopener noreferrer'
            >
              {source}
              <Image src='/icon-new-window.svg' alt={source} width={12} height={12} />
            </Link>
          ))}
        </ul>
      </footer>
    </main>
  )
}
