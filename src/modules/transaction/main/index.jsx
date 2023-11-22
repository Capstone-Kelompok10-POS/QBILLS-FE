"use client";

import { Analytics, Chip, DatePicker, Input, Pagination, Select, Table } from "@/components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [select, setSelect] = useState("");
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

    const rowDate = new Date(row.date.split("/").reverse().join("-"));
    const startFilterDate = startDate ? new Date(startDate.split("/").reverse().join("-")) : null;
    const endFilterDate = endDate ? new Date(endDate.split("/").reverse().join("-")) : null;

    const withinDateRange =
      !startFilterDate ||
      !endFilterDate ||
      (rowDate >= startFilterDate && rowDate <= endFilterDate);

    const matchesStatus = !select || row.status.toLowerCase() === select.toLowerCase();

    return matchesSearch && withinDateRange && matchesStatus;
  });

  const perPage = 10;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData.length / perPage);

  return (
    <main className="space-y-5">
      <section className="flex w-full gap-5">
        <Analytics
          icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} className="text-I4" />}
          label={"Daily Total"}
          numberData={"Rp.560.000"}
        />

        <Analytics
          icon={<ImportExportIcon sx={{ fontSize: 50 }} className="text-S4" />}
          label={"Success"}
          numberData={"31"}
        />

        <Analytics
          icon={<QueryBuilderIcon sx={{ fontSize: 50 }} className="text-W4" />}
          label={"Pending"}
          numberData={"4"}
        />

        <Analytics
          icon={<RemoveCircleOutlineIcon sx={{ fontSize: 50 }} className="text-E4" />}
          label={"Canceled"}
          numberData={"11"}
        />
      </section>

      <section className="flex w-full gap-5">
        <div className="w-full">
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

        <div className="w-full">
          <DatePicker
            size={"sm"}
            name={"startdate"}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="w-full">
          <DatePicker
            size={"sm"}
            name={"enddate"}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="w-full">
          <Select
            size={"sm"}
            label={"Status"}
            name={"status"}
            options={["Pending", "Success", "Canceled"]}
            startIcon={<LabelOutlinedIcon sx={{ fontSize: 30 }} />}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          />
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
