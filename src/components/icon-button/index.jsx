import clsx from "clsx";

export const IconButton = ({ color, variant, size, icon, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-xl border", {
        // SOLID
        "border-P4 bg-P4 text-N1 hover:border-P5 hover:bg-P5 active:scale-95 active:border-P6 active:bg-P6":
          !variant && !color && !disabled,
        "border-S1 bg-S1 text-S5 hover:border-S2 hover:bg-S2 active:scale-95 active:border-S3 active:bg-S3":
          !variant && color === "success" && !disabled,
        "border-I1 bg-I1 text-I5 hover:border-I2 hover:bg-I2 active:scale-95 active:border-I3 active:bg-I3":
          !variant && color === "info" && !disabled,
        "border-W1 bg-W1 text-W5 hover:border-W2 hover:bg-W2 active:scale-95 active:border-W3 active:bg-W3":
          !variant && color === "warning" && !disabled,
        "border-E1 bg-E1 text-E5 hover:border-E2 hover:bg-E2 active:scale-95 active:border-E3 active:bg-E3":
          !variant && color === "error" && !disabled,

        // OUTLINE
        "border-P4 text-P4 hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          variant === "outline" && !color && !disabled,
        "border-S1 text-S5 hover:border-S2 hover:bg-S2  active:scale-95 active:border-S3 active:bg-S3 ":
          variant === "outline" && color === "success" && !disabled,
        "border-I1 text-I5 hover:border-I2 hover:bg-I2 active:scale-95 active:border-I3 active:bg-I3":
          variant === "outline" && color === "info" && !disabled,
        "border-W1 text-W5 hover:border-W2 hover:bg-W2 active:scale-95 active:border-W3 active:bg-W3 ":
          variant === "outline" && color === "warning" && !disabled,
        "border-E1 text-E5 hover:border-E2 hover:bg-E2 active:scale-95 active:border-E3 active:bg-E3":
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
