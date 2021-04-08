import React from 'react';

import StreamVideo from './components/StreamVideo';
import ChatBox from './components/ChatBox';

import s from './app.module.css';

function App() {
  return (
    <div className={s.app}>
      <div className={s.feeds}>
      </div>
      <div className={s.main}>
        <div className={s.video}>
          <StreamVideo /> 
        </div>
        <div className={s.ads}>
        </div>
      </div>
       <ChatBox />
    </div>
  );
}

export default App;
