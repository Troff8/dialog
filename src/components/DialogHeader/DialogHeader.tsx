import styles from "./DialogHeader.module.css";

interface DialogHeaderProps {
  leftLabel?: string;
  rightLabel?: string;
  hideHeader?: boolean;
}

function DialogHeader({
  leftLabel = "Ответ",
  rightLabel = "Вопрос",
  hideHeader,
}: DialogHeaderProps) {
  if (hideHeader) return null;

  return (
    <div className={styles.header}>
      <div>{leftLabel}</div>
      <div>{rightLabel}</div>
    </div>
  );
}

export default DialogHeader;
