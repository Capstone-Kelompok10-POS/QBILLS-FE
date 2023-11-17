export const Table = ({ tableHead, children }) => {
  return (
    <div className="w-full overflow-scroll rounded-lg shadow md:block">
      <table className="w-full">
        <thead className="border-b-2 border-N2 bg-N2">
          <tr>
            {tableHead.map((label, index) => (
              <th key={index} className="border-b-2 px-4 py-2 text-center">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-N2">{children}</tbody>
      </table>
    </div>
  );
};
