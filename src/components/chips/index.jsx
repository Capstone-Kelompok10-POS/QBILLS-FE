import clsx from "clsx";

export const Chips = ({ size, startIcon, label, endIcon, onClick, selected, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex h-fit w-fit items-center justify-center rounded-full border", {
        // STYLE
        "border-N2 text-N7 hover:border-P5 hover:bg-P5 hover:text-N1 active:scale-95 active:border-P6 active:bg-P6 active:text-N1":
          !selected && !disabled,
        "cursor-default border-P6 bg-P6 text-N1": selected && !disabled,
        "cursor-not-allowed border-N3 bg-N2 text-N3": disabled && !selected,

        // SIZE
        "gap-1 px-4 py-2": size === "md",
        "gap-2 px-5 py-3": size === "lg",
      })}
    >
      {startIcon}
      <span className="font-semibold">{label}</span>
      {endIcon}
    </button>
  );
};
