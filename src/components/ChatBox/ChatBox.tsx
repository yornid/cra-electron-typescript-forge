import React, { useContext } from 'react'
import { pathOr } from 'ramda'

import { RootContext } from '../../StoreProvider'
import Dialogs from './Dialogs'
import MyWord from './MyWord'

import s from './chatBox.module.css'

function ChatBox() {
  const Chat = pathOr({}, ['Chat'], useContext(RootContext))
  return (
    <div className={s.chatBox}>
      <Dialogs Chat={Chat} />
      <MyWord Chat={Chat} />
    </div>
  )
}

export default ChatBox