import styles from "./DialogHeader.module.css";

interface DialogHeaderProps {
  leftLabel?: string;
  rightLabel?: string;
}

function DialogHeader({
  leftLabel = "Ответ",
  rightLabel = "Вопрос",
}: DialogHeaderProps) {
  return (
    <div className={styles.header}>
      <div>{leftLabel}</div>
      <div>{rightLabel}</div>
    </div>
  );
}

export default DialogHeader;
