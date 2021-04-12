import React, { createContext } from 'react'
import { makeAutoObservable } from "mobx"

const name = 'Ronald'

class Store {
  Chat
  constructor() {
    this.Chat = new Chat()
  }
}

export interface DialogProps { 
  name: string,
  word: string,
  ts: string,
  owner: boolean,
}

class Chat {
  dialogs: DialogProps[] = []
  myWord: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setWord(s: string): void {
    this.myWord = s;
  }

  sendWord(): void {
    const d = new Date();
    this.dialogs.push({
      name,
      ts: d.getHours() + ':' + d.getMinutes(),
      word: this.myWord,
      owner: true,
    })
    this.myWord = ''
  }
}

export const RootContext = createContext({})

interface props {
  children: React.ReactNode
}

const StoreProvider = ({ children }: props) => (
  <RootContext.Provider value={new Store()}>
    { children }
  </RootContext.Provider>
)

export default StoreProvider