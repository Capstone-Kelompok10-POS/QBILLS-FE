import clsx from "clsx";

export const Chip = ({ size, startIcon, label, endIcon, onClick, selected, disabled, variant }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex h-fit w-fit items-center justify-center rounded-full border", {
        // NORMAL
        "border-N2  hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          !selected && !disabled,

        // VARIANT
        "bg-S1 text-S5": variant === "success",
        "bg-W1 text-W5": variant === "pending",
        "bg-E1 text-E5": variant === "canceled",

        // SELECTED
        "cursor-default border-P6 bg-P6 text-N1": selected && !disabled,

        // DISABLED
        "cursor-not-allowed border-N3 bg-N2 text-N3": disabled,

        // SIZE
        "gap-1 px-3 py-2": size === "sm",
        "gap-1 px-4 py-2.5": size === "md",
        "gap-2 px-5 py-3": size === "lg",
        "gap-2 px-6 py-3.5": size === "xl",
        "gap-2 px-7 py-4": size === "2xl",
        "gap-2 px-8 py-5": size === "3xl",

        // FONT SIZE
        "text-sm": size === "sm",
        "text-base": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl",
        "text-3xl": size === "3xl",
      })}
    >
      {startIcon}
      <span className="font-semibold">{label}</span>
      {endIcon}
    </button>
  );
};
