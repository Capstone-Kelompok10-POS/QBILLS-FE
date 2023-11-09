import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import clsx from "clsx";

export const SnackBar = ({
  variant,
  size,
  desc,
  onClickClose,
  action,
  actionLabel,
  onClickAction,
}) => {
  return (
    <section
      className={clsx("rounded-md pl-[6px]", {
        // VARIANT
        "border-S4 bg-S4": variant === "success",
        "border-I4 bg-I4": variant === "information",
        "border-W4 bg-W4": variant === "warning",
        "border-E4 bg-E4": variant === "error",

        // SIZE
        "h-[70px] w-[410px] border": size === "sm",
        "h-[90px] w-[640px] border-2": size === "lg",
      })}
    >
      <div className="flex h-full w-full gap-x-2 rounded-md bg-N1 px-2 py-1">
        {/* ICON */}
        {variant === "success" && (
          <CheckCircleRoundedIcon
            className="mt-1 text-S4"
            sx={{ fontSize: size === "sm" ? 25 : 30 }}
          />
        )}
        {variant === "information" && (
          <InfoIcon className="mt-1 text-I4" sx={{ fontSize: size === "sm" ? 25 : 30 }} />
        )}
        {variant === "warning" && (
          <WarningIcon className="mt-1 text-W4" sx={{ fontSize: size === "sm" ? 25 : 30 }} />
        )}
        {variant === "error" && (
          <ErrorIcon className="mt-1 text-E4" sx={{ fontSize: size === "sm" ? 25 : 30 }} />
        )}

        <div className="w-full">
          {/* LABEL */}
          <span
            className={clsx("", {
              // VARIANT
              "text-S4": variant === "success",
              "text-I4": variant === "information",
              "text-W4": variant === "warning",
              "text-E4": variant === "error",

              // SIZE
              "text-base": size === "sm",
              "text-xl": size === "lg",
            })}
          >
            {variant === "success" && "Success"}
            {variant === "information" && "Information"}
            {variant === "warning" && "Warning"}
            {variant === "error" && "Error"}
          </span>

          {/* DESCRIPTION */}
          <p
            className={clsx("text-N3", {
              // SIZE
              "text-xs": size === "sm",
              "text-base": size === "lg",
            })}
          >
            {desc}
          </p>
        </div>

        <div className="flex flex-col items-end">
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClickClose}
            className="mt-1 text-N3 hover:text-N4 active:scale-95"
          >
            <CloseIcon />
          </button>

          {/* ACTION BUTTON*/}
          {action && (
            <button
              type="button"
              onClick={onClickAction}
              className={clsx("mt-auto text-end active:scale-95", {
                // VARIANT
                "text-S4 hover:text-S5": variant === "success",
                "text-I4 hover:text-I5": variant === "information",
                "text-W4 hover:text-W5": variant === "warning",
                "text-E4 hover:text-E5": variant === "error",

                // SIZE
                "text-sm": size === "sm",
                "text-lg": size === "lg",
              })}
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
