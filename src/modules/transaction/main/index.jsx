"use client";

import { Analytics, Chip, Date, Input, Pagination, Select, Table } from "@/components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useState } from "react";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [select, setSelect] = useState("");

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
            label={"Seacrh"}
            name={"search"}
            value={search}
            endIcon={<SearchIcon sx={{ fontSize: 30 }} />}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full">
          <Date
            size={"sm"}
            name={"startdate"}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="w-full">
          <Date
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
            options={["A", "B"]}
            startIcon={<LabelOutlinedIcon sx={{ fontSize: 30 }} />}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          />
        </div>
      </section>

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

      <section>
        <Pagination
          startData={1}
          endData={30}
          total={1000}
          currentPage={2}
          totalPage={10}
          onClickPrevData={() => {}}
          onClickNextData={() => {}}
        />
      </section>
    </main>
  );
};
