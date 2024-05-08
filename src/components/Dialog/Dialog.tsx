import { MessageObject } from "../../types/message";

import SystemMessage from "../SystemMessage/SystemMessage";
import DialogHeader from "../DialogHeader/DialogHeader";
import UserMessage from "../UserMessage/UserMessage";
import AssistantMessage from "../AssistantMessage/AssistantMessage";

import styles from "./Dialog.module.css";
import AnswerOptions from "../AnswerOptions/AnswerOptions";

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
  leftLabel?: string;
  rightLabel?: string;
  hideHeader?: boolean;
}

interface MapMessages {
  [key: string]: React.ComponentType<MessageObject>;
}
const mapMessages: MapMessages = {
  system: SystemMessage,
  user: UserMessage,
  assistant: AssistantMessage,
};
function Dialog({ dialog, leftLabel, rightLabel, hideHeader }: DialogProps) {
  const isOptions = dialog[dialog.length - 1];

  const isQuestons =
    isOptions.options && isOptions.role === "assistant" ? true : false;

  const context = isQuestons ? dialog.slice(0, -1) : dialog;
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>
        {!hideHeader && (
          <DialogHeader leftLabel={leftLabel} rightLabel={rightLabel} />
        )}
        {context.map((message, index) => {
          const Message = mapMessages[message.role];
          return <Message key={index} {...message} />;
        })}
      </div>
      {isQuestons && <AnswerOptions questons={isOptions.options!} />}
    </div>
  );
}

export default Dialog;
