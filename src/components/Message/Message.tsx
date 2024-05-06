import { MessageObject } from "../../types/message";
import styles from "./Message.module.css";

interface MessageProps {
  message: MessageObject;
}

function Message({ message }: MessageProps) {
  const paragraphs = message.content.split("\n"); // FIXME ???

  return (
    <div
      className={`${styles.message} ${
        message.role === "user" ? styles.messageUser : styles.messageAssistant
      }`}
    >
      {paragraphs.map((paragraph: string, index: number) => (
        <div key={index}>{paragraph}</div>
      ))}
    </div>
  );
}

export default Message;
