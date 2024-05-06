import style from './NounList.module.scss'

interface Props {}

export const NounList = () => {
  return (
    <section>
      <h3>meaning</h3>
      <ul className={style.meaning__list}>
        <li className={style.noun__meaning}>
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
        <li className={style.noun__meaning}>
          A component of many instruments including the piano, organ, and harpsichord consisting of
          usually black and white keys that cause different tones to be produced when struck.
        </li>
        <li className={style.noun__meaning}>
          A device with keys of a musical keyboard, used to control electronic sound-producing
          devices which may be built into or separate from the keyboard device.
        </li>
      </ul>
    </section>
  )
}
