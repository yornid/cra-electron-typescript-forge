import React, { useState } from 'react';

import s from './myWord.module.css'

function MyWord() {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setWord(e.currentTarget.value)
  const send = () => {
    console.log('send')
  }
  const [word, setWord] = useState('')
  return (
    <div className={s.myWord}>
      <textarea className={s.words} value={word} onChange={onChange} />
      <button className={s.send} onClick={send}>send</button>
    </div>
  )
}

export default MyWord