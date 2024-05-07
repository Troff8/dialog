import Message from "../Message/Message";
import { MessageObject } from "../../types/message";

import styles from "./Dialog.module.css";
import SystemMessage from "../SystemMessage/SystemMessage";
import DialogHeader from "../DialogHeader/DialogHeader";

interface DialogProps {
  dialog: MessageObject[];
}

function Dialog({ dialog }: DialogProps) {
  return (
    <div className={styles.wrapper}>
      <DialogHeader />
      {dialog.length === 0 ? (
        <SystemMessage message="Загруженный диалог не имеет сообщений..." />
      ) : (
        dialog.map((message, index) =>
          message.role === "system" ? (
            <SystemMessage message={message.content} key={index} />
          ) : (
            <Message key={index} message={message} />
          )
        )
      )}
    </div>
  );
}

export default Dialog;
