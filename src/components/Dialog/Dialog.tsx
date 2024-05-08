import { MessageObject } from "../../types/message";

import SystemMessage from "../SystemMessage/SystemMessage";
import DialogHeader from "../DialogHeader/DialogHeader";
import UserMessage from "../UserMessage/UserMessage";
import AssistantMessage from "../AssistantMessage/AssistantMessage";

import styles from "./Dialog.module.css";
import Questons from "../Questons/Questons";

interface Option {
  label: string;
  content: string;
}

interface Message {
  role: string;
  content?: string;
  options?: Option[];
}

interface DialogProps {
  dialog: Message[];
}

interface MapMessages {
  [key: string]: React.ComponentType<{ message: MessageObject }>;
}
const mapMessages: MapMessages = {
  system: SystemMessage,
  user: UserMessage,
  assistant: AssistantMessage,
};
function Dialog({ dialog }: DialogProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>
        <DialogHeader />
        {dialog.map((message, index) => {
          if (message.options) return;
          const Message = mapMessages[message.role];
          return <Message key={index} message={{ ...message }} />;
        })}
      </div>
      {dialog[dialog.length - 1].options && (
        <Questons questons={dialog[dialog.length - 1].options!} /> //  FIXME
      )}
    </div>
  );
}

export default Dialog;
