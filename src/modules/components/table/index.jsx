import { Table, Chip } from "@/components";

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
      status: "Success",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Canceled",
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
      status: "Canceled",
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
      status: "Success",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Canceled",
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
      status: "Canceled",
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
      status: "Success",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023 11.34",
      transaction: "Rp 56.000",
      status: "Canceled",
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
      status: "Canceled",
    },
  ];
  return (
    <>
      {/* 
        tableHead={[""]}
        children={</>} 
      */}

      <section className="max-h-[60vh] min-h-[50vh] overflow-scroll rounded-lg border border-N2">
        <Table tableHead={tableHead}>
          {data.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
              <td className="px-4 py-2 text-center">{row.ct}</td>
              <td className="px-4 py-2 text-center">{row.cashier}</td>
              <td className="px-4 py-2 text-center">{row.cn}</td>
              <td className="px-4 py-2 text-center">{row.payment}</td>
              <td className="px-4 py-2 text-center">{row.date}</td>
              <td className="px-4 py-2 text-center">{row.transaction}</td>
              <td className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <Chip
                    variant={row.status.toLocaleLowerCase()}
                    size={"md-status"}
                    label={row.status}
                  />
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </section>
    </>
  );
};
