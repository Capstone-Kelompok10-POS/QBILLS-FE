export const Analytics = ({ icon, label, numberData }) => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border border-N2 p-8 shadow-sm">
      <div className="flex-shrink-0">
        {icon && <div className="h-12 w-12 overflow-hidden">{icon}</div>}
      </div>
      <div className="whitespace-nowrap text-base font-semibold leading-5 text-N3">{label}</div>
      <div className="whitespace-nowrap text-3xl font-semibold leading-10 text-N7">
        {numberData}
      </div>
    </div>
  );
};
