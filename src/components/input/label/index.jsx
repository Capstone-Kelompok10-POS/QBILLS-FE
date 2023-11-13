import clsx from "clsx";

export const Label = ({ htmlFor, label, value, error, disabled }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("font-semibold", {
        // DEFAUTL
        "absolute cursor-text group-focus-within:static group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:text-N3":
          value === "" && !error && !disabled,
        "static text-xs text-N3": value !== "" && !error && !disabled,

        // ERROR
        "absolute cursor-text group-focus-within:static group-focus-within:cursor-default group-focus-within:text-xs":
          value === "" && error && !disabled,

        // DISABLED
        "static text-xs": (value !== "" && error && !disabled) || (value !== "" && disabled),
        absolute: value === "" && disabled,
      })}
    >
      {label}
    </label>
  );
};
