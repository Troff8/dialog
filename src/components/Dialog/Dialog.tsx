import { MessageObject } from "../../types/message";

import SystemMessage from "../SystemMessage/SystemMessage";
import DialogHeader from "../DialogHeader/DialogHeader";
import UserMessage from "../UserMessage/UserMessage";
import AssistantMessage from "../AssistantMessage/AssistantMessage";

import styles from "./Dialog.module.css";

interface DialogProps {
  dialog: MessageObject[];
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
      <DialogHeader />
      {dialog.map((message, index) => {
        const Message = mapMessages[message.role];
        return <Message key={index} message={{ ...message }} />;
      })}
    </div>
  );
}

export default Dialog;
