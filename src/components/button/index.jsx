import clsx from "clsx";

export const Button = ({ type, variant, size, startIcon, label, endIcon, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-lg border", {
        // VARIANT
        "border-P4 bg-P4 text-N1 hover:border-P5 hover:bg-P5 active:scale-95 active:border-P6 active:bg-P6":
          !variant && !disabled,
        "border-P4 text-P4 hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          variant === "outline" && !disabled,

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
