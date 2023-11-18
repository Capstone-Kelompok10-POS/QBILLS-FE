export const Table = ({ tableHead, children }) => {
  return (
    <table className="h-full w-full">
      <thead className="bg-N2.2 sticky top-0">
        <tr>
          {tableHead.map((label, index) => (
            <th key={index} className="px-4 py-4 text-center text-N5">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
