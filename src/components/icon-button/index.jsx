import clsx from "clsx";

export const IconButton = ({ size, shadow, icon, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-lg", {
        // STYLE
        "bg-P4 text-N1 hover:bg-P5 active:scale-95 active:bg-P6": !disabled,
        "cursor-not-allowed bg-N2 text-N3": disabled,

        // SHADOW
        "shadow-md shadow-N7/40": shadow,

        // SIZE
        "h-[40px] w-[40px]": size === "sm",
        "h-[48px] w-[48px]": size === "md",
        "h-[56px] w-[56px]": size === "lg",
      })}
    >
      {icon}
    </button>
  );
};
