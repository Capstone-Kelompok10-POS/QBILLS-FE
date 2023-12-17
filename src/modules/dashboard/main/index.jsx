"use client";

import { Analytics, Table } from "@/components";
import logoQBills from "@/public/assets/images/logos/brown/logo-1.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import clsx from "clsx";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export const Main = () => {
  const session = useSession();
  const token = session.data?.user?.results.token;
  const [dataTopMembership, setDataTopMembership] = useState();
  const [dataRecentTransaction, setDataRecentTransaction] = useState();
  const [dataBestSellingProduct, setDataBestSellingProduct] = useState();
  const [dataMonthlyRevenue, setDataMonthlyRevenue] = useState();
  const [transactions, setTransactions] = useState();
  const [yearlyRevenue, setYearlyRevenue] = useState();
  const [products, setProducts] = useState();
  const [cashier, setCashier] = useState();

  const fetchTopMembership = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/memberships/top", {
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
      setDataTopMembership(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchRecentTransaction = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/transactions/recent", {
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
      setDataRecentTransaction(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchBestSellingProduct = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/products/best", {
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
      setDataBestSellingProduct(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchMonthlyRevenue = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/transactions/revenue/monthly", {
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
      setDataMonthlyRevenue(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/transactions", {
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
      setTransactions(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchYearlyRevenue = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/transaction/revenue/yearly", {
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
      setYearlyRevenue(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/products", {
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
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchCashier = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/cashier", {
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
      setCashier(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTopMembership();
      fetchRecentTransaction();
      fetchBestSellingProduct();
      fetchMonthlyRevenue();
      fetchTransactions();
      fetchYearlyRevenue();
      fetchProducts();
      fetchCashier();
    }
  }, [token]);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: Array.isArray(dataMonthlyRevenue)
          ? dataMonthlyRevenue.map((item) => item.revenue)
          : [],
        borderColor: "rgb(190, 132, 101)",
        backgroundColor: "rgb(190, 132, 101)",
      },
    ],
  };

  const tableHead = ["Image", "Product Name", "Category", "Price", "Quantity", "Ammount"];

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(price));

    return price > 0 ? `+ ${formattedPrice}` : `- ${formattedPrice}`;
  };

  return (
    <main>
      <div className="flex gap-5">
        <div className="w-full space-y-5">
          <section className="flex w-full gap-5">
            <Analytics
              icon={<ImportExportIcon sx={{ fontSize: 50 }} className="text-S4" />}
              label={"Total Order"}
              numberData={transactions?.total}
            />

            <Analytics
              icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} className="text-I4" />}
              label={"Revenue"}
              numberData={formatPrice(yearlyRevenue?.revenue).replace("+", "").replace("-", "")}
            />

            <Analytics
              icon={<TakeoutDiningIcon sx={{ fontSize: 50 }} className="text-W4" />}
              label={"Total Product"}
              numberData={products?.total}
            />

            <Analytics
              icon={<GroupIcon sx={{ fontSize: 50 }} className="text-E4" />}
              label={"Total Cashier"}
              numberData={cashier?.total}
            />
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Income Flow</h2>
            <div className="rounded-lg border p-5">
              <Line options={options} data={chartData} />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Best Selling Product</h2>
            <div className="rounded-lg border border-N2">
              <Table tableHead={tableHead}>
                {dataBestSellingProduct?.results?.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
                    <td className="px-4 py-2 text-center">
                      <Image  
                        src={row.productImage}
                        alt={"Photo Product"}
                        width={30}
                        height={30}
                        className="mx-auto"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">{row.productName}</td>
                    <td className="px-4 py-2 text-center">{row.ProductTypeName}</td>
                    <td className="px-4 py-2 text-center">{row.productPrice}</td>
                    <td className="px-4 py-2 text-center">{row.totalQuantity}</td>
                    <td className="px-4 py-2 text-center">{row.amount}</td>
                  </tr>
                ))}
              </Table>
            </div>
          </section>
        </div>

        <div className="flex h-auto w-[700px] flex-col gap-5">
          <section className="h-full space-y-5 rounded-lg border p-5">
            <h2 className="text-2xl font-semibold">Recent Transaction</h2>
            <ul className="flex max-h-[650px] min-h-[650px] flex-col gap-5 overflow-y-scroll pr-5">
              {dataRecentTransaction?.results?.map((data, index) => (
                <li className="flex items-center gap-5" key={index}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-N2.2">
                    {data.totalPayment > 0 ? (
                      <AccountBalanceWalletOutlinedIcon fontSize="large" className="text-S4" />
                    ) : (
                      <RemoveCircleOutlineOutlinedIcon fontSize="large" className="text-E4" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{data.membership.name}</h3>
                    <p className="text-sm text-N3">{data.createdAt}</p>
                  </div>
                  <p
                    className={clsx("ml-auto", {
                      "text-S4": data.totalPayment > 0,
                      "text-E4": data.totalPayment < 0,
                    })}
                  >
                    {formatPrice(data.totalPayment)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="h-full space-y-5 rounded-lg border p-5">
            <h2 className="text-2xl font-semibold">Top Membership</h2>

            <div className="flex items-center justify-between font-semibold text-N3">
              <div className="mx-5 space-x-5">
                <span>Rank</span>
                <span>Name</span>
              </div>
              <span className="mr-5">Point</span>
            </div>

            <ul className="max-h-[160px] space-y-5 font-semibold">
              {dataTopMembership?.results?.map((data, index) => (
                <li className="flex items-center justify-between" key={index}>
                  <div className="mx-5 flex items-center gap-5">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        index === 0 ? "bg-W1 text-W5" : "bg-N2 text-N3"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>{data.name}</span>
                  </div>
                  <span className="mr-5">{data.totalPoint}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
