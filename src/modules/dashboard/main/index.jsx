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

export const Main = () => {
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

  const generateRandomData = () => {
    return labels.map(() => Math.floor(Math.random() * (1000 - -1000 + 1)) + -1000);
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: generateRandomData(),
        borderColor: "rgb(190, 132, 101)",
        backgroundColor: "rgb(190, 132, 101)",
      },
    ],
  };

  const tableHead = ["Image", "Product Name", "Category", "Price", "Quantity", "Ammount"];

  const tableData = [
    {
      image: logoQBills,
      productName: "Cappuccino Espresso",
      category: "Coffee",
      price: "Rp 45.000",
      quantity: 50,
      amount: "Rp 2.250.000",
    },
    {
      image: logoQBills,
      productName: "Cappuccino Espresso",
      category: "Coffee",
      price: "Rp 45.000",
      quantity: 50,
      amount: "Rp 2.250.000",
    },
    {
      image: logoQBills,
      productName: "Cappuccino Espresso",
      category: "Coffee",
      price: "Rp 45.000",
      quantity: 50,
      amount: "Rp 2.250.000",
    },
  ];

  const transactionData = [
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 1000000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -500000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 100000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -800000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 2000000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -50000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 500000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -500000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 1000000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -500000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 100000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -800000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 2000000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -50000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: 500000,
    },
    {
      name: "Maren Vetrovs",
      date: "14/11/2023, 11.58",
      price: -500000,
    },
  ];

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(price));

    return price > 0 ? `+ ${formattedPrice}` : `- ${formattedPrice}`;
  };

  const topMembership = [
    { name: "Gede", point: 500 },
    { name: "Dewo", point: 450 },
    { name: "Wahyu", point: 300 },
    { name: "Mustika", point: 225 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
    { name: "Wiwaha", point: 105 },
  ];

  return (
    <main>
      <div className="flex gap-5">
        <div className="w-full space-y-5">
          <section className="flex w-full gap-5">
            <Analytics
              icon={<ImportExportIcon sx={{ fontSize: 50 }} className="text-S4" />}
              label={"Total Order"}
              numberData={"65"}
            />

            <Analytics
              icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} className="text-I4" />}
              label={"Revenue"}
              numberData={"Rp 1.600.000"}
            />

            <Analytics
              icon={<TakeoutDiningIcon sx={{ fontSize: 50 }} className="text-W4" />}
              label={"Total Product"}
              numberData={"Rp 650.000"}
            />

            <Analytics
              icon={<GroupIcon sx={{ fontSize: 50 }} className="text-E4" />}
              label={"Total Cashier"}
              numberData={"18"}
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
                {tableData.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
                    <td className="px-4 py-2 text-center">
                      <Image src={row.image} alt={"Photo Product"} width={30} className="mx-auto" />
                    </td>
                    <td className="px-4 py-2 text-center">{row.productName}</td>
                    <td className="px-4 py-2 text-center">{row.category}</td>
                    <td className="px-4 py-2 text-center">{row.price}</td>
                    <td className="px-4 py-2 text-center">{row.quantity}</td>
                    <td className="px-4 py-2 text-center">{row.amount}</td>
                  </tr>
                ))}
              </Table>
            </div>
          </section>
        </div>

        <div className="flex h-auto w-[700px] flex-col gap-5">
          <section className="h-full space-y-5 rounded-lg border p-5">
            <h2 className="text-2xl font-semibold">Transaction</h2>
            <ul className="flex max-h-[500px] flex-col gap-5 overflow-y-scroll pr-5">
              {transactionData.map((data, index) => (
                <li className="flex items-center gap-5" key={index}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-N2.2">
                    {data.price > 0 ? (
                      <AccountBalanceWalletOutlinedIcon fontSize="large" className="text-S4" />
                    ) : (
                      <RemoveCircleOutlineOutlinedIcon fontSize="large" className="text-E4" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <p className="text-sm text-N3">{data.date}</p>
                  </div>
                  <p
                    className={clsx("ml-auto", {
                      "text-S4": data.price > 0,
                      "text-E4": data.price < 0,
                    })}
                  >
                    {formatPrice(data.price)}
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
              <span className="mr-10">Point</span>
            </div>

            <ul className="max-h-[290px] space-y-5 overflow-y-scroll font-semibold">
              {topMembership.map((data, index) => (
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
                  <span className="mr-5">{data.point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
