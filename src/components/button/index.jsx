import clsx from "clsx";

export const Button = ({ type, variant, size, startIcon, label, endIcon, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-lg border", {
        // STYLE
        "bg-P4 text-N1 hover:bg-P5 active:scale-95 active:bg-P6":
          !disabled && variant !== "outline",
        "cursor-not-allowed border-N3 bg-N2 text-N3": disabled,

        // SIZE
        "h-fit w-fit gap-1 px-3 py-2": size === "sm",
        "h-fit w-fit gap-1 px-4 py-2": size === "md",
        "h-fit w-fit gap-2 px-5 py-3": size === "lg",
        "h-fit w-full gap-1 px-3 py-2": size === "sm-full",
        "h-fit w-full gap-1 px-4 py-2": size === "md-full",
        "h-fit w-full gap-2 px-5 py-3": size === "lg-full",

        // VARIANT
        "border-P4 text-P4 hover:bg-P5 hover:text-N1 active:scale-95 active:bg-P6 active:text-N1":
          !disabled && variant === "outline",
      })}
    >
      {startIcon}
      <span className="font-semibold">{label}</span>
      {endIcon}
    </button>
  );
};
