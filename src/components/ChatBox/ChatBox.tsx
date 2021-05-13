import React, { useEffect } from "react";
import s from "./chatBox.module.css";
import Dialogs from "./Dialogs";
import { MyWordHOC } from "./MyWord";

const t: number = 5000;

// add comment on ChatBox
function ChatBox({ Chat }: any) {
  useEffect(() => {
    const tId = setInterval(Chat.getLatestDialogs, t);
    return () => clearInterval(tId);
  }, [Chat]);
  return (
    <div className={s.chatBox}>
      <Dialogs dialogs={Chat.dialogs} />
      <MyWordHOC Chat={Chat} />
    </div>
  );
}

export default ChatBox;
