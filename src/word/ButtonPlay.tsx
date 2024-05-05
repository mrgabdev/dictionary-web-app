'use client'
import style from './ButtonPlay.module.scss'

interface Props {
  word: string
}

export const ButtonPlay = ({ word }: Props) => {
  const speechWord = () => {
    const speechSynthesis = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(utterance)
  }

  return (
    <svg
      className={style['button-play']}
      onClick={speechWord}
      xmlns='http://www.w3.org/2000/svg'
      width='75'
      height='75'
      viewBox='0 0 75 75'
    >
      <g fill='#A445ED' fillRule='evenodd'>
        <circle cx='37.5' cy='37.5' r='37.5' opacity='0.25'></circle>
        <path d='M29 27v21l21-10.5z'></path>
      </g>
    </svg>
  )
}
