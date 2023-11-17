import { Table } from "@/components";
export const ComponentTable = () => {
  const tableHead = [
    "Code Transaction",
    "Cashier",
    "Customer Name",
    "Payment Method",
    "Date",
    "Transaction",
    "Status",
  ];
  const data = [
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Pending",
    },

    // Tambahkan data lain sesuai kebutuhan
  ];
  return (
    <Table tableHead={tableHead}>
      {data.map((row, index) => (
        <tr key={row.id} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2"}`}>
          <td className="border-b px-4 py-2 text-center">{row.ct}</td>
          <td className="border-b px-4 py-2 text-center">{row.cashier}</td>
          <td className="border-b px-4 py-2 text-center">{row.cn}</td>
          <td className="border-b px-4 py-2 text-center">{row.payment}</td>
          <td className="border-b px-4 py-2 text-center">{row.date}</td>
          <td className="border-b px-4 py-2 text-center">{row.transaction}</td>
          <td className="border-b px-4 py-2 text-center">{row.status}</td>
        </tr>
      ))}
    </Table>
  );
};
