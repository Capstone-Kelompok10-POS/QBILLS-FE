import clsx from "clsx";
import { Label } from "./label";
import { Wrapper } from "./wrapper";

export const Input = ({
  type,
  label,
  name,
  startIcon,
  value,
  endIcon,
  endIconOnClick,
  onChange,
  supText,
  supLabel,
  error,
  disabled,
  required,
}) => {
  return (
    <Wrapper
      startIcon={startIcon}
      value={value}
      endIcon={endIcon}
      endIconOnClick={endIconOnClick}
      supText={supText}
      supLabel={supLabel}
      error={error}
      disabled={disabled}
    >
      <div
        className={clsx("relative flex w-full", {
          "items-center group-focus-within:flex-col group-focus-within:items-start group-focus-within:justify-center group-hover:flex-col group-hover:items-start group-hover:justify-center":
            value === "" && !disabled,
          "flex-col justify-center": value !== "" && !disabled,
          "i flex-col justify-center": value !== "" && disabled,
        })}
      >
        <Label htmlFor={name} label={label} value={value} error={error} disabled={disabled} />
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={`Input ${label}`}
          disabled={disabled}
          required={required}
          className={clsx("w-full rounded-lg bg-transparent outline-none", {
            "placeholder:text-transparent group-focus-within:placeholder:text-current group-hover:placeholder:text-current":
              !disabled,
            "text-N7": error && !disabled,
            "placeholder:text-transparent": value === "" && disabled,
            "text-current": value !== "" && disabled,
          })}
        />
      </div>
    </Wrapper>
  );
};
