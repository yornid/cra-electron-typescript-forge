import React from 'react'

import Dialogs from './Dialogs'
import MyWord from './MyWord'

import s from './chatBox.module.css'

function ChatBox() {
  return (
    <div className={s.chatBox}>
      <Dialogs />
      <MyWord />
    </div>
  )
}

export default ChatBox