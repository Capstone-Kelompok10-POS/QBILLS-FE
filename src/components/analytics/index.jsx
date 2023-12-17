export const Analytics = ({ icon, label, numberData }) => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-4 rounded-lg border border-N2 p-8">
      {icon}
      <div className="whitespace-nowrap text-base font-semibold leading-5 text-N3">{label}</div>
      <div className="whitespace-nowrap text-3xl font-semibold leading-10 text-N7">
        {numberData}
      </div>
    </section>
  );
};
