import clsx from "clsx";

export const Label = ({ htmlFor, size, label, value, error, disabled }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("font-semibold", {
        // SIZE SMALL
        // DEFAUTL
        "absolute cursor-pointer group-focus-within:static group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:text-N3":
          value === "" && !error && !disabled && size === "sm",
        "static text-xs text-N3": value !== "" && !error && !disabled && size === "sm",

        // ERROR
        "absolute cursor-pointer group-focus-within:static group-focus-within:cursor-default group-focus-within:text-xs":
          value === "" && error && !disabled && size === "sm",

        // DISABLED
        "static text-xs":
          (value !== "" && error && !disabled && size === "sm") ||
          (value !== "" && disabled && size === "sm"),

        // SIZE MEDIUM
        // DEFAUTL
        "absolute cursor-pointer group-focus-within:static group-focus-within:cursor-default group-focus-within:text-sm group-focus-within:text-N3":
          value === "" && !error && !disabled && size === "md",
        "static text-sm text-N3": value !== "" && !error && !disabled && size === "md",

        // ERROR
        "absolute cursor-pointer group-focus-within:static group-focus-within:cursor-default group-focus-within:text-sm":
          value === "" && error && !disabled && size === "md",

        // DISABLED
        "static text-sm":
          (value !== "" && error && !disabled && size === "md") ||
          (value !== "" && disabled && size === "md"),

        absolute: value === "" && disabled,
      })}
    >
      {label}
    </label>
  );
};
