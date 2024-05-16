import styles from "./CheckboxArea.module.css";
interface CheckboxAreaProps {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}

export const CheckboxArea: React.FC<CheckboxAreaProps> = ({
  orientation = "vertical",
  children,
}) => {
  const flexDirection = orientation === "horizontal" ? "row" : "column";

  return (
    <div style={{ flexDirection }} className={styles.wrapper}>
      {children}
    </div>
  );
};
