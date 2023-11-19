import clsx from "clsx";

export const Chip = ({ color, size, startIcon, label, endIcon, onClick, selected, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-full border", {
        // COLOR
        "border-N2  hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          !color && !selected && !disabled,
        "cursor-default border-S1 bg-S1 text-S5": color === "success" && !selected && !disabled,
        "cursor-default border-W1 bg-W1 text-W5": color === "pending" && !selected && !disabled,
        "cursor-default border-E1 bg-E1 text-E5": color === "canceled" && !selected && !disabled,

        // SELECTED
        "cursor-default border-P6 bg-P6 text-N1": !color && selected && !disabled,

        // DISABLED
        "cursor-not-allowed border-N3 bg-N2 text-N3": !color && disabled,

        // SIZE
        "h-fit w-fit gap-1 px-3 py-2": size === "sm",
        "h-7 w-24 gap-1": size === "sm-status",
        "h-fit w-fit gap-1 px-4 py-2.5": size === "md",
        "h-10 w-28 gap-1": size === "md-status",
        "h-fit w-fit gap-2 px-5 py-3": size === "lg",
        "h-fit w-fit gap-2 px-6 py-3.5": size === "xl",
        "h-fit w-fit gap-2 px-7 py-4": size === "2xl",
        "h-fit w-fit gap-2 px-8 py-5": size === "3xl",

        // FONT SIZE
        "text-sm": size === "sm" || size === "md-status",
        "text-xs": size === "sm-status",
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
