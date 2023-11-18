import clsx from "clsx";

export const Button = ({
  type,
  variant,
  color,
  size,
  startIcon,
  label,
  endIcon,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-lg border", {
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

        // DISABLED
        "cursor-not-allowed border-N3 bg-N2 text-N3": !variant && disabled,
        "cursor-not-allowed border-N3 text-N3": variant === "outline" && disabled,

        // SIZE
        "h-fit w-fit gap-1 px-3 py-2": size === "sm",
        "h-fit w-fit gap-1 px-4 py-2.5": size === "md",
        "h-fit w-fit gap-2 px-5 py-3": size === "lg",
        "h-fit w-fit gap-2 px-6 py-3.5": size === "xl",
        "h-fit w-fit gap-2 px-7 py-4": size === "2xl",
        "h-fit w-fit gap-2 px-8 py-5": size === "3xl",
        "h-fit w-full gap-1 px-3 py-2": size === "sm-full",
        "h-fit w-full gap-1 px-4 py-2.5": size === "md-full",
        "h-fit w-full gap-2 px-5 py-3": size === "lg-full",
        "h-fit w-full gap-2 px-6 py-3.5": size === "xl-full",
        "h-fit w-full gap-2 px-7 py-4": size === "2xl-full",
        "h-fit w-full gap-2 px-8 py-5": size === "3xl-full",

        // FONT SIZE
        "text-sm": size === "sm" || size === "sm-full",
        "text-base": size === "md" || size === "md-full",
        "text-lg": size === "lg" || size === "lg-full",
        "text-xl": size === "xl" || size === "xl-full",
        "text-2xl": size === "2xl" || size === "2xl-full",
        "text-3xl": size === "3xl" || size === "3xl-full",
      })}
    >
      {startIcon}
      <span className="font-semibold">{label}</span>
      {endIcon}
    </button>
  );
};
