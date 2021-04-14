import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import classnames from 'classnames'

import { FeedType } from '../../StoreProvider'

import s from './feedBox.module.css'

const t: number = 10000

function FeedBox({ Feed }: any) {
  useEffect(() => {
    Feed.updateFeeds()
    const tId = setInterval(Feed.updateFeeds, t)
    return () => clearInterval(tId)
  }, [Feed])
  return (
    <ul className={s.feedBox}>
      { Feed.feeds.map((item: FeedType) => (
        <li className={s.wrap} key={item.id}>
          <img className={classnames('img', s.img)} src={item.imgURL} alt={item.id} />
          <div className={s.right}>
            <h4 className={s.break}>{item.title}</h4>
            <small className={s.break}>{item.desc}</small>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default observer(FeedBox)