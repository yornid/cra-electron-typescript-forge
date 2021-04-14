import React from 'react';

import { useRootContext } from './StoreProvider'

import StreamVideo from './components/StreamVideo'
import ChatBox from './components/ChatBox'
import FeedBox from './components/FeedBox'

import s from './app.module.css';

function App() {
  const rootCtx: any = useRootContext()
  return (
    <div className={s.app}>
      <div className={s.feeds}>
        <h2>Feeds</h2>
        <FeedBox Feed={rootCtx.Feed} />
      </div>
      <div className={s.main}>
        <StreamVideo /> 
        <div className={s.ads}>
        </div>
      </div>
       <ChatBox Chat={rootCtx.Chat} />
    </div>
  );
}

export default App;
