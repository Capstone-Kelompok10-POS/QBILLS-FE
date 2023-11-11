import clsx from "clsx";

export const Label = ({ htmlFor, label, value, error, disabled }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("font-semibold", {
        "absolute group-focus-within:static group-focus-within:text-xs group-focus-within:text-N3 group-hover:static group-hover:text-xs":
          value === "" && !error && !disabled,
        "static text-xs text-N3 group-hover:text-P3 group-focus-within:group-hover:text-N3":
          value !== "" && !error && !disabled,
        "absolute group-focus-within:static group-focus-within:text-xs group-hover:static group-hover:text-xs":
          value === "" && error && !disabled,
        "static text-xs": value !== "" && error && !disabled,
        absolute: value === "" && disabled,
        "static text-xs": value !== "" && disabled,
      })}
    >
      {label}
    </label>
  );
};
