import clsx from "clsx";
import { Label } from "./label";
import { Wrapper } from "./wrapper";

export const Select = ({
  size,
  label,
  name,
  options,
  startIcon,
  value,
  endIcon,
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
      startIcon={startIcon}
      value={value}
      endIcon={endIcon}
      supText={supText}
      supLabel={supLabel}
      error={error}
      disabled={disabled}
    >
      <div
        className={clsx("relative flex w-full", {
          "items-center group-focus-within:flex-col group-focus-within:items-start group-focus-within:justify-center group-hover:flex-col group-hover:items-start group-hover:justify-center":
            value === "" && !disabled,
          "flex-col justify-center": (value !== "" && !disabled) || (value !== "" && disabled),
        })}
      >
        <Label
          htmlFor={name}
          size={size}
          label={label}
          value={value}
          error={error}
          disabled={disabled}
        />
        <select
          name={name}
          id={name}
          options={options}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={clsx("-ml-1 w-full rounded-lg bg-transparent outline-none", {
            // CURSOR
            "cursor-pointer": !disabled,

            // ERROR
            "text-N7": error && !disabled,

            // DISABLED
            "text-current": value !== "" && disabled,
          })}
        >
          <option value=""></option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Wrapper>
  );
};
