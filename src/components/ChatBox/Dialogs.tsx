import React from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react-lite'

import { DialogProps } from '../../StoreProvider'

import s from './dialogs.module.css';

function Dialogs({ Chat }: any) {
  console.log('in Dialogs!!!!');
  return (
    <div className={s.dialogs}>
      <ul className={s.wrap}>
        { Chat.dialogs.map((d: DialogProps) => (
          <li className={classnames(s.item, { [s.owner]: d.owner })} key={d.ts}>
            <span className={s.name}>{ d.name }: </span>
            <span className={s.say}>{ d.word }</span>
            <p className={s.ts}>{ d.ts }</p>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default observer(Dialogs)