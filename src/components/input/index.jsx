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
    >
      <div
        className={clsx("relative flex w-full", {
          "items-center group-focus-within:flex-col group-focus-within:items-start group-focus-within:justify-center group-hover:flex-col group-hover:items-start group-hover:justify-center":
            value === "",
          "flex-col justify-center": value !== "",
        })}
      >
        <Label htmlFor={name} label={label} value={value} error={error} />
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={`Input ${label}`}
          className={clsx(
            "w-full rounded-lg bg-transparent outline-none placeholder:text-transparent group-focus-within:placeholder:text-current group-hover:placeholder:text-current",
            { "text-N7": error },
          )}
        />
      </div>
    </Wrapper>
  );
};
