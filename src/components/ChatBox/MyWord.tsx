import React from 'react'
import { observer } from 'mobx-react-lite'

import s from './myWord.module.css'

function MyWord({ Chat }: any) {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => Chat.setWord(e.currentTarget.value)
  const send = () => Chat.sendWord()
  console.log('in myWord!!!!!');
  return (
    <div className={s.myWord}>
      <textarea value={Chat.myWord} onChange={onChange} />
      <button onClick={send}>send</button>
    </div>
  )
}

export default observer(MyWord)