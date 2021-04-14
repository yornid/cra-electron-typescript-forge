import React, { createContext, useContext } from 'react'
import { makeAutoObservable, runInAction, observable } from "mobx"
import axios from 'axios'

import { randomDialog, randomFeeds, Queue } from './utils'

const name = 'Ronald'

class Store {
  Chat
  Feed
  constructor() {
    this.Chat = new Chat()
    this.Feed = new Feed()
  }
}

export interface FeedType {
  id: string
  imgURL: string
  title: string
  desc: string
}

class Feed {
  feedsQ = new Queue()
  feeds: FeedType[] = []

  constructor() {
    makeAutoObservable(this, {
      feedsQ: false,
      feeds: observable.ref,
    })
  }

  updateFeeds = async () => {
    try {
      await axios.get('/feeds')
    } catch (e) {
      const feeds = randomFeeds()
      if (feeds.length > 0) {
        for (let item of feeds) this.feedsQ.push(item)
        for (let i = this.feedsQ.size(); i > 20; i--) this.feedsQ.pop()
        const a = new Array(this.feedsQ.size())
        let h = this.feedsQ.head
        let i = this.feedsQ.size() - 1
        while (h) {
          a[i--] = h.val
          h = h.next
        }
        runInAction(() => {
          this.feeds = a
        })
      }
    }
  }
}

export interface DialogProps { 
  name: string
  word: string
  time: string
  ts: number
  owner: boolean
}

class Chat {
  dialogs: DialogProps[] = []
  myWord: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setWord = (s: string): void => {
    this.myWord = s;
  }

  sendWord = (): void => {
    const d = new Date();
    const m = d.getMinutes();
    this.dialogs.push({
      name,
      time: d.getHours() + ':' + (m < 10 ? '0' : '') + m,
      ts: d.getTime(),
      word: this.myWord,
      owner: true,
    })
    this.myWord = ''
  }

  getLatestDialogs = async () => {
    try {
      await axios.get('/dialogs')
    } catch (e) {
      let dialog: any = randomDialog()
      if (dialog !== null) {
        runInAction(() => this.dialogs.push(dialog))
      }
    }
  }
}

const ctx = createContext({})
export const useRootContext = () => useContext(ctx)

interface props {
  children: React.ReactNode
}

const StoreProvider = ({ children }: props) => (
  <ctx.Provider value={new Store()}>
    { children }
  </ctx.Provider>
)

export default StoreProvider