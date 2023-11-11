import clsx from "clsx";

export const Label = ({ htmlFor, label, value, error }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("font-semibold", {
        "absolute group-focus-within:static group-focus-within:text-xs group-focus-within:text-N3 group-hover:static group-hover:text-xs":
          value === "" && !error,
        "static text-xs text-N3 group-hover:text-P3 group-focus-within:group-hover:text-N3":
          value !== "" && !error,
        "absolute group-focus-within:static group-focus-within:text-xs group-hover:static group-hover:text-xs":
          value === "" && error,
        "static text-xs": value !== "" && error,
      })}
    >
      {label}
    </label>
  );
};
