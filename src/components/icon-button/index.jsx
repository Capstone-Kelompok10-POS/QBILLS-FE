import clsx from "clsx";

export const IconButton = ({ variant, size, icon, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-xl border", {
        // VARIANT
        "border-P4 bg-P4 text-N1 hover:border-P5 hover:bg-P5 active:scale-95 active:border-P6 active:bg-P6":
          !variant && !disabled,
        "border-P4 text-P4 hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          variant === "outline" && !disabled,

        // DISABLED
        "cursor-not-allowed bg-N2 text-N3": !variant && disabled,
        "cursor-not-allowed border-N3 text-N3": variant === "outline" && disabled,

        // SIZE
        "p-1.5": size === "sm",
        "p-2": size === "md",
        "p-2.5": size === "lg",
        "p-3": size === "xl",
        "p-3.5": size === "2xl",
        "p-4": size === "3xl",
      })}
    >
      {icon}
    </button>
  );
};
