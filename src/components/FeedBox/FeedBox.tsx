import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

const t: number = 10000

function FeedBox({ Feed: any }: any) {
  useEffect(() => {
    if (Feed) {
      const tId = setInterval(Feed.updateFeeds, t)
      return () => clearInterval(tId)
    }
  }, [])
  const { feeds } = Feed
  if (feeds.isEmpty()) return null
  const a = new Array(feeds.size())
  let h = feeds.head
  let i = a.length - 1;
  while (h !== null) {
    a[i--] = h;
    h = h.next;
  }
  return (
    <ul>
      { a.map(item => {
        <li key={item.id}>
          <img src={item.imgURL} alt={item.id} />
          <h4>{item.title}</h4>
          <small>{item.desc}</small>
        </li>
      })}
    </ul>
  )
}

export default observer(FeedBox)