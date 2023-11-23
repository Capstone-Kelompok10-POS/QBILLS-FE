"use client";
import { useState } from "react";
import { Button, Input, Table, Chip, Pagination } from "@/components";
import SearchIcon from "@mui/icons-material/Search";
export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Success",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Canceled",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Canceled",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Success",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Canceled",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Canceled",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Success",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Canceled",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Pending",
    },
    {
      ct: "MND1234",
      cashier: "Victor Yoga",
      cn: "Randy Donin",
      payment: "QRIS BCA",
      date: "14/11/2023",
      transaction: "Rp 56.000",
      status: "Canceled",
    },
  ];
  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.ct.toLowerCase().includes(search.toLowerCase()) ||
      row.cn.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });
  const perPage = 10;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData.length / perPage);
  return (
    <main className="space-y-5">
      <section className="flex w-full items-center gap-5">
        <div className="w-7/12">
          <p className="text-2xl font-semibold">All Membership</p>
        </div>
        <div className="ms-auto w-3/12">
          <Input
            type={"text"}
            size={"sm"}
            label={"Search"}
            name={"search"}
            value={search}
            endIcon={<SearchIcon sx={{ fontSize: 30 }} />}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={() => {}} size={"md"} label={"Print Card"} />
        </div>
      </section>
      <section className="max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
        <Table tableHead={tableHead}>
          {currentData.map((row, index) => (
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
                    status={row.status.toLocaleLowerCase()}
                    size={"md-status"}
                    label={row.status}
                  />
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </section>
      <section>
        <Pagination
          startData={indexOfFirstData + 1}
          endData={Math.min(indexOfLastData, filteredData.length)}
          total={filteredData.length}
          currentPage={currentPage}
          totalPage={totalPage}
          onClickPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onClickNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
        />
      </section>
    </main>
  );
};
