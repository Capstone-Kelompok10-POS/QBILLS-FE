import clsx from "clsx";
import { Wrapper } from "./wrapper";

export const Date = ({
  size,
  name,
  value,
  onChange,
  supText,
  supLabel,
  error,
  disabled,
  required,
}) => {
  return (
    <Wrapper
      size={size}
      value={value}
      supText={supText}
      supLabel={supLabel}
      error={error}
      disabled={disabled}
    >
      <input
        type={"date"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={clsx("w-full cursor-text rounded-lg bg-transparent outline-none", {
          // ERROR
          "text-N7": error && !disabled,

          // DISABLED
          "text-current": value !== "" && disabled,
        })}
      />
    </Wrapper>
  );
};
