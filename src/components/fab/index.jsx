import clsx from "clsx";

export const FAB = ({ variant, size, icon, label, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-xl border font-semibold", {
        // VARIANT
        "border-P4 bg-P4 text-N1 hover:border-P5 hover:bg-P5 active:scale-95 active:border-P6 active:bg-P6":
          !variant && !disabled,
        "border-P4 text-P4 hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          variant === "outline" && !disabled,

        // DISABLED
        "cursor-not-allowed bg-N2 text-N3": !variant && disabled,
        "cursor-not-allowed border-N3 text-N3": variant === "outline" && disabled,

        // GAP
        "gap-1": label,

        // SIZE
        "p-1.5": size === "sm" && !label,
        "p-2": size === "md" && !label,
        "p-2.5": size === "lg" && !label,
        "p-3": size === "xl" && !label,
        "p-3.5": size === "2xl" && !label,
        "p-4": size === "3xl" && !label,
        "px-2 py-1.5": size === "sm" && label,
        "px-2.5 py-2": size === "md" && label,
        "px-3 py-2.5": size === "lg" && label,
        "px-3.5 py-3": size === "xl" && label,
        "px-4 py-3.5": size === "2xl" && label,
        "px-5 py-4": size === "3xl" && label,

        // FONT SIZE
        "text-sm": size === "sm",
        "text-base": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl",
        "text-3xl": size === "3xl",
      })}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
