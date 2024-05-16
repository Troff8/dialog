import { Checkbox } from "@salutejs/plasma-web";

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
  checked?: boolean;
  size?: "s" | "m";
  readonly?: boolean;
  onChange?: () => void;
}

export const CheckboxCustom = ({
  name,
  label,
  description,
  disabled,
  view = "default",
  checked,
  size = "s",
  readonly = false,
  onChange,
}: CheckboxProps) => {
  return (
    <Checkbox
      name={name}
      label={label}
      description={description}
      disabled={disabled}
      size={size}
      checked={checked}
      view={view}
      onChange={onChange}
      style={{
        pointerEvents: readonly ? "none" : "all",
      }}
    />
  );
};
