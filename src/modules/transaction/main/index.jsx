"use client";

import { Analytics, Chip, DatePicker, Input, Pagination, Select, Table } from "@/components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export const Main = () => {
  const session = useSession();
  const token = session.data?.user?.results.token;
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [select, setSelect] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataGET, setDataGET] = useState();

  // FETCH GET / GET DATA
  const fetchGET = async () => {
    try {
      const response = await fetch("https://www.ariefbook.my.id/api/v1/transactions", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Fetch request failed");
      }

      const data = await response.json();
      setDataGET(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchGET();
    }
  }, [token]);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateAnalytics = (data) => {
    let dailyTotal = 0;
    let successCount = 0;
    let pendingCount = 0;
    let canceledCount = 0;

    data.forEach((transaction) => {
      dailyTotal += transaction.totalPayment;

      switch (transaction.transactionPayment.paymentStatus.toLowerCase()) {
        case "success":
          successCount++;
          break;
        case "pending":
          pendingCount++;
          break;
        case "canceled":
          canceledCount++;
          break;
        default:
          break;
      }
    });

    return {
      dailyTotal,
      successCount,
      pendingCount,
      canceledCount,
    };
  };

  const analytics = calculateAnalytics(dataGET?.results || []);
  analytics.dailyTotal = formatRupiah(analytics.dailyTotal);

  const tableHead = [
    "Code Transaction",
    "Cashier",
    "Customer Name",
    "Payment Method",
    "Date",
    "Transaction",
    "Status",
  ];

  const filteredData = dataGET?.results?.filter((row) => {
    const matchesSearch =
      row.id.toString().includes(search.toLowerCase()) ||
      row.membership.name.toLowerCase().includes(search.toLowerCase());

    const rowDate = new Date(row.createdAt.split(" ")[0]);
    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    const startFilterDate = startDate ? formatDate(startDate) : null;
    const endFilterDate = endDate ? formatDate(endDate) : null;

    const withinDateRange =
      !startFilterDate ||
      !endFilterDate ||
      (rowDate >= startFilterDate && rowDate <= endFilterDate);

    const matchesStatus =
      !select || row.transactionPayment.paymentStatus.toLowerCase() === select.toLowerCase();

    return matchesSearch && withinDateRange && matchesStatus;
  });

  const perPage = 10;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData?.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData?.length / perPage);

  return (
    <main className="space-y-5">
      <section className="flex w-full gap-5">
        <Analytics
          icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} className="text-I4" />}
          label={"Daily Total"}
          numberData={analytics.dailyTotal}
        />

        <Analytics
          icon={<ImportExportIcon sx={{ fontSize: 50 }} className="text-S4" />}
          label={"Success"}
          numberData={analytics.successCount.toString()}
        />

        <Analytics
          icon={<QueryBuilderIcon sx={{ fontSize: 50 }} className="text-W4" />}
          label={"Pending"}
          numberData={analytics.pendingCount.toString()}
        />

        <Analytics
          icon={<RemoveCircleOutlineIcon sx={{ fontSize: 50 }} className="text-E4" />}
          label={"Canceled"}
          numberData={analytics.canceledCount.toString()}
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

      <section className="overflow-hidden rounded-lg border border-N2">
        <div className="max-h-[60vh] min-h-[60vh] overflow-scroll">
          <Table tableHead={tableHead}>
            {currentData?.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
                <td className="px-4 py-2 text-center">{row.id}</td>
                <td className="px-4 py-2 text-center">{row.cashier.fullname}</td>
                <td className="px-4 py-2 text-center">{row.membership.name}</td>
                <td className="px-4 py-2 text-center">
                  {row.transactionPayment.paymentmethod.name}
                </td>
                <td className="px-4 py-2 text-center">{row.createdAt}</td>
                <td className="px-4 py-2 text-center">{formatRupiah(row.totalPayment)}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-center">
                    <Chip
                      status={row.transactionPayment.paymentStatus.toLocaleLowerCase()}
                      size={"md-status"}
                      label={row.transactionPayment.paymentStatus}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </section>

      <section>
        <Pagination
          startData={indexOfFirstData + 1}
          endData={Math.min(indexOfLastData, filteredData?.length)}
          total={filteredData?.length}
          currentPage={currentPage}
          totalPage={totalPage}
          onClickPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onClickNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
        />
      </section>
    </main>
  );
};
