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
          <ul>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
          </ul>
        </section>

        <section>
          <h3>synonyms</h3>
          <p>electronic keyboard</p>
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
