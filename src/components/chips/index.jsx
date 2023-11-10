import clsx from "clsx";

export const Chips = ({ size, startIcon, label, endIcon, onClick, selected, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex items-center justify-center rounded-full border", {
        // STYLE
        "border-N2 text-N7 hover:bg-P4 hover:text-P2 active:bg-P2 active:text-P5":
          !selected && !disabled,
        "cursor-default border-P3 bg-P3 text-N1": selected && !disabled,
        "cursor-not-allowed border-N3 bg-N2 text-N3": disabled && !selected,

        // SIZE
        "gap-1 px-4 py-2": size === "sm",
        "gap-2 px-5 py-3": size === "md",
      })}
    >
      {startIcon}
      <span className="font-semibold">{label}</span>
      {endIcon}
    </button>
  );
};
