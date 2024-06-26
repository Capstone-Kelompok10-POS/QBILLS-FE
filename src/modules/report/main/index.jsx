"use client";

import { Analytics, Button, IconButton, Input, Pagination, Select, Table } from "@/components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import OpenAI from "openai";
import { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 70,
      ticks: {
        stepSize: 7,
      },
    },
  },
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
  },
};
const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

const chartData = {
  labels,
  datasets: [
    {
      label: "Revenue",
      borderColor: "rgb(190, 132, 101)",
      backgroundColor: "rgb(190, 132, 101)",
      data: [],
    },
  ],
};

const data = {
  labels: ["Coffee", "Non Coffee", "Snack", "Meal"],
  datasets: [
    {
      label: "# of Votes",
      data: [1, 1, 1, 1],
      backgroundColor: [
        "#DA2D2D", // Red
        "#FFCC00", // Yellow
        "#33B469", // Green
        "#2F80ED", // Blue
      ],
      borderColor: [
        "#DA2D2D", // Red
        "#FFCC00", // Yellow
        "#33B469", // Green
        "#2F80ED", // Blue
      ],
      borderWidth: 1,
    },
  ],
};
export const Main = () => {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const tableHead = ["No", "Product Name", "Code", "Category", "Size", "Price", "Sold", "Ammount"];
  const tableData = [];
  const filteredData = tableData.filter((item) => {
    // Replace the condition with your actual filtering logic
    return item.ctg === value; // Example: filter by category
  });
  const perPage = 10;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData?.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData?.length / perPage);
  const handleChatButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState([]);

  //const openai = new OpenAI({
  //  apiKey: ,
  //dangerouslyAllowBrowser: true,
  //});

  // const OpenAIChat = async (e) => {
  // e.preventDefault();
  //
  //  try {
  //  const response = await openai.chat.completions.create({
  //  messages: [{ role: "user", content: prompt }],
  //model: "gpt-3.5-turbo",
  // });

  //const aiReply = response.data.choices[0].text.trim();

  //setChat((prev) => [...prev, aiReply]);

  //setPrompt("");
  // } catch (error) {
  // console.error("Failed to fetch from OpenAI: ", error);
  //}
  //};

  return (
    <>
      <div className="flex">
        <section className="h-3/6 w-8/12 space-y-3">
          <div className="rounded-lg border p-5">
            <div className="flex justify-around">
              <h2 className="mb-10 me-auto text-2xl font-semibold">Revenue Monthly Report</h2>
              <div className="mr-6 ms-auto w-32">
                <Select
                  size={"sm"}
                  label={"Month"}
                  name={"SelectSmall"}
                  options={[
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
                  ]}
                  value={value}
                  supText={true}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <Line options={options} data={chartData} height={180} />
          </div>
        </section>
        <section className="ml-5 h-auto w-4/12 space-y-5 rounded-lg border p-5">
          <div className="flex items-start">
            <h2 className="text-2xl font-semibold">Popular Category</h2>
            <div className="mr-6 ms-auto">
              <Select
                size={"sm"}
                label={"Month"}
                name={"SelectSmall"}
                options={[
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
                ]}
                value={value}
                supText={true}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <Doughnut options={options2} data={data} height={100} width={100} />
        </section>
      </div>
      <section className="mt-5">
        <div className="rounded-lg border p-5">
          <h2 className="mb-10 me-auto text-2xl font-semibold">Product Analysis</h2>
          <div className="flex items-center gap-5">
            <Analytics
              icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} className="text-I4" />}
              label={"Total Revenue"}
              numberData={"Rp 0"}
            />
            <Analytics
              icon={<ShoppingCartIcon sx={{ fontSize: 50 }} className="text-W4" />}
              label={"Total Order"}
              numberData={"0"}
            />
          </div>
          <div className="my-5">
            <section className="overflow-hidden rounded-lg border border-N2">
              <div className="max-h-[200px] min-h-[200px] overflow-scroll">
                <Table tableHead={tableHead}>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-center">{row.id}</td>
                      <td className="px-4 py-2 text-center">{row.pn}</td>
                      <td className="px-4 py-2 text-center">{row.code}</td>
                      <td className="px-4 py-2 text-center">{row.ctg}</td>
                      <td className="px-4 py-2 text-center">{row.sze}</td>
                      <td className="px-4 py-2 text-center">{row.prc}</td>
                      <td className="px-4 py-2 text-center">{row.sld}</td>
                      <td className="px-4 py-2 text-center">{row.amnt}</td>
                    </tr>
                  ))}
                </Table>
              </div>
            </section>
            <div className="mt-5">
              <Pagination
                startData={indexOfFirstData >= 0 ? indexOfFirstData + 1 : 0}
                endData={Math.min(indexOfLastData, filteredData?.length) || 0}
                total={filteredData?.length || 0}
                currentPage={currentPage || 0}
                totalPage={totalPage || 0}
                onClickPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                onClickNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
              />
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="fixed bottom-14 right-14 z-50">
        <IconButton
          size={"xl"}
          icon={<ChatIcon sx={{ fontSize: 25 }} />}
          onClick={handleChatButtonClick}
        />
        {isOpen && (
          //<form
          //  onSubmit={OpenAIChat}
          //  className="absolute bottom-0 right-20 w-80 rounded-md bg-white p-4 shadow-md"
          //>
          //  <h3 className="mb-2 text-lg font-semibold">Chatbot</h3>
           // <div style={{ maxHeight: "200px", overflowY: "auto" }}>
           //   {chat.map((chat, index) => (
           //     <div key={index} className="mb-2">
           //       <span>{chat}</span>
           //     </div>
           //   ))}
           // </div>
           // <div className="flex items-center justify-center gap-5">
           //   <Input
            //    value={prompt}
            //    onChange={(e) => {
            //      setPrompt(e.target.value);
            //    }}
            //  />
            //  <Button type="submit" size={"sm"} label={"Send"} />
          //  </div>
         // </form>
        )}
     </section>
        */}
    </>
  );
};
