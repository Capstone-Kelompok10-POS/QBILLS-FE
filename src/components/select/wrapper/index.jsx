import clsx from "clsx";

export const Wrapper = ({
  size,
  startIcon,
  value,
  endIcon,
  children,
  supText,
  supLabel,
  error,
  disabled,
}) => {
  return (
    <section>
      <div
        className={clsx("group w-full rounded-xl border px-2 py-1", {
          // DEFAUTL
          "border-N2 text-N3 focus-within:border-P6 focus-within:text-P6 hover:border-P6 hover:text-P6 focus-within:hover:bg-transparent focus-within:hover:text-P6":
            value === "" && !error && !disabled,
          "border-N2 text-N7 focus-within:border-P6 focus-within:text-P6 hover:border-P6 hover:text-P6 focus-within:hover:bg-transparent focus-within:hover:text-P6":
            value !== "" && !error && !disabled,

          // ERROR
          "border-E4 text-E4": error && !disabled,

          // DISABLED
          "border-N3 bg-N2 text-N3": disabled,

          // SIZE
          "h-[50px]": size === "sm",
          "h-[55px]": size === "md",
        })}
      >
        <div className="flex h-full w-full items-center justify-center gap-2">
          {startIcon}
          {children}
          {endIcon}
        </div>
      </div>
      {supText && <span className={clsx("ml-2 text-sm", { "text-E4": error })}>{supLabel}</span>}
    </section>
  );
};
