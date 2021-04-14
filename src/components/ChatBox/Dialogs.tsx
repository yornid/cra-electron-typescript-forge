import React, { useLayoutEffect, useRef } from 'react'
import classnames from 'classnames'
import { observer } from 'mobx-react-lite'

import { DialogProps } from '../../StoreProvider'

import s from './dialogs.module.css';

function Dialogs({ dialogs = [] }: any) {
  const el = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (el && el.current) {
      el.current.scrollTop = el.current.scrollHeight
    }
  })
  return (
    <div ref={el} className={s.dialogs}>
      <ul className={s.wrap}>
        { dialogs.map((d: DialogProps) => (
          <li className={classnames(s.item, { [s.owner]: d.owner })} key={d.ts}>
            <span className={s.name}>{ d.name }: </span>
            <span className={s.say}>{ d.word }</span>
            <small className={s.time}>{ d.time }</small>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default observer(Dialogs)