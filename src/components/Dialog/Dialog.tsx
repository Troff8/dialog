import Message from "../Message/Message";
import { MessageObject } from "../../types/message";

import styles from "./Dialog.module.css";
import SystemMessage from "../SystemMessage/SystemMessage";

interface DialogProps {
  dialog: MessageObject[];
}

function Dialog({ dialog }: DialogProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>Ответ</div>
        <div>Вопрос</div>
      </div>
      <div className={styles.dialog}>
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
    </div>
  );
}

export default Dialog;
