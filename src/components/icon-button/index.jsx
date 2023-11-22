import clsx from "clsx";

export const IconButton = ({ color, variant, size, icon, onClick, disabled  }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-xl border", {
        // SOLID
        "border-P4 bg-P4 text-N1 hover:border-P5 hover:bg-P5 active:scale-95 active:border-P6 active:bg-P6":
          !variant && !color && !disabled,
        "border-S4 bg-S4 text-N1 hover:border-S5 hover:bg-S5 active:scale-95 active:border-S6 active:bg-S6":
          !variant && color === "success" && !disabled,
        "border-I4 bg-I4 text-N1 hover:border-I5 hover:bg-I5 active:scale-95 active:border-I6 active:bg-I6":
          !variant && color === "info" && !disabled,
        "border-W4 bg-W4 text-N1 hover:border-W5 hover:bg-W5 active:scale-95 active:border-W6 active:bg-W6":
          !variant && color === "warning" && !disabled,
        "border-E4 bg-E4 text-N1 hover:border-E5 hover:bg-E5 active:scale-95 active:border-E6 active:bg-E6":
          !variant && color === "error" && !disabled,

        // OUTLINE
        "border-P4 text-P4 hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          variant === "outline" && !color && !disabled,
        "border-S4 text-S4 hover:border-S5 hover:bg-S5 hover:text-N1 active:scale-95 active:border-S6 active:bg-S6 active:text-N1":
          variant === "outline" && color === "success" && !disabled,
        "border-I4 text-I4 hover:border-I5 hover:bg-I5 hover:text-N1 active:scale-95 active:border-I6 active:bg-I6 active:text-N1":
          variant === "outline" && color === "info" && !disabled,
        "border-W4 text-W4 hover:border-W5 hover:bg-W5 hover:text-N1 active:scale-95 active:border-W6 active:bg-W6 active:text-N1":
          variant === "outline" && color === "warning" && !disabled,
        "border-E4 text-E4 hover:border-E5 hover:bg-E5 hover:text-N1 active:scale-95 active:border-E6 active:bg-E6 active:text-N1":
          variant === "outline" && color === "error" && !disabled,

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
