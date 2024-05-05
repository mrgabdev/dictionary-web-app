import { ButtonPlay, PhoneticWord, Section } from '@/word'
import { Metadata } from 'next'
import style from './page.module.scss'

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
  return (
    <main className='container'>
      <header className={style.header}>
        <div>
          <h1>{params.word}</h1>
          <PhoneticWord word='/&#712;ki&#720;bɔ&#720;d/' />
        </div>
        <ButtonPlay word={params.word} />
      </header>
      <Section sectionName={'noun'}>
        <section>
          <h3>meaning</h3>
          <ul className={style.noun__list}>
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
          <ul>
            <li>
              <p>To type on a computer keyboard.</p>
              <p>“Keyboarding is the part of this job I hate the most.”</p>
            </li>
          </ul>
        </section>
      </Section>
      <footer>
        <h4>Source</h4>
        <p>https://en.wiktionary.org/wiki/keyboard</p>
      </footer>
    </main>
  )
}
