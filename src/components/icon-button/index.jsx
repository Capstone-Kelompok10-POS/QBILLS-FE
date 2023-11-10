import clsx from "clsx";

export const IconButton = ({ size, icon, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-lg", {
        // STYLE
        "bg-P4 text-N1 shadow-md shadow-N7/40 hover:bg-P5 active:scale-95 active:bg-P6": !disabled,
        "cursor-not-allowed bg-P1 text-P2 shadow-md shadow-N7/40": disabled,

        // SIZE
        "h-[40px] w-[40px]": size === "sm",
        "h-[56px] w-[56px]": size === "md",
      })}
    >
      {icon}
    </button>
  );
};
