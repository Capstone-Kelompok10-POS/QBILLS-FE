import clsx from "clsx";

export const Checkbox = ({ onChange, checked, disabled }) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        className={clsx(
          "before:content[''] peer form-checkbox relative h-5 w-5 appearance-none rounded border before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-P2 before:opacity-0 before:transition-opacity focus:outline-none focus:ring-0",
          {
            "cursor-default border-P4 text-P4 hover:before:opacity-10": !checked && !disabled,
            "cursor-default text-P4 hover:before:opacity-10": checked && !disabled,
            "cursor-not-allowed border-N3 text-N2": checked && disabled,
          },
        )}
      />
    </label>
  );
};
