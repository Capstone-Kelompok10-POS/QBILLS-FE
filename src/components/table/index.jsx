export const Table = ({ tableHead, children }) => {
  return (
    <section className="w-full overflow-scroll rounded-lg border border-N2">
      <table className="w-full">
        <thead className="bg-N2">
          <tr>
            {tableHead.map((label, index) => (
              <th key={index} className="px-4 py-2 text-center">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </section>
  );
};
