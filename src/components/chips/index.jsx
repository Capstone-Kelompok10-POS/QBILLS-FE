export const Chips = ({ startIcon, label, endIcon }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-full border border-N3 px-4 py-3 active:bg-P2 active:text-P5 hover:bg-P5 hover:text-P2"
    >
      {startIcon}
      <span className="font-semibold ">{label}</span>
      {endIcon}
    </button>
  );
};
