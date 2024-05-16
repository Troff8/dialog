import { Radiobox } from "@salutejs/plasma-web";

interface CheckboxProps {
  name?: string;
  label?: string | React.ReactNode;
  description?: string;
  disabled?: boolean;
  view?:
    | "default"
    | "primary"
    | "secondary"
    | "tertiary"
    | "paragraph"
    | "accent"
    | "positive"
    | "warning"
    | "negative"
    | undefined;
  size?: "s" | "m";
  readonly?: boolean;
  onChange?: () => void;
}

export const RadioboxCustom = ({
  name,
  label,
  description,
  disabled,
  view = "default",
  size = "s",
  readonly = false,
  onChange,
}: CheckboxProps) => {
  return (
    <Radiobox
      name={name}
      label={label}
      description={description}
      disabled={disabled}
      size={size}
      view={view}
      onChange={onChange}
      style={{
        pointerEvents: readonly ? "none" : "all",
      }}
    />
  );
};
