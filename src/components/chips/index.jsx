import React from "react";
import clsx from "clsx";

export const Chips = ({ startIcon, label, endIcon, isSelected, isDisabled, onClick, size }) => {
  const isSmall = size === "sm";
  const isMedium = size === "md";

  return (
    <button
      onClick={onClick}
      className={clsx("flex items-center justify-center gap-2 rounded-full focus:outline-none", {
        "h-[40px] w-[93px]": isSmall,
        "h-[48px] w-[133px]": isMedium,
        "border border-N2 bg-N1 text-N7 hover:bg-P4 hover:text-P2 active:bg-P2 active:text-P5":
          !isSelected && !isDisabled,
        "cursor-not-allowed border border-N2 bg-N3 text-N3": isDisabled,
        "border border-N2 bg-P3 text-N1 ": isSelected && !isDisabled,
      })}
      disabled={isDisabled}
    >
      {startIcon}
      <span className="font-open-sans text-center text-base font-semibold leading-6">{label}</span>
      {endIcon}
    </button>
  );
};
