import style from './PhoneticWord.module.scss'

interface Props {
  word: string
}

export const PhoneticWord = ({ word }: Props) => {
  return <p className={style['phonetic-word']}>{word}</p>
}
