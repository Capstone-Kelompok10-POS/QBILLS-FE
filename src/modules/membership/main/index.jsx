"use client";
import { useState } from "react";
import { Button, Input, Table, Pagination } from "@/components";
import SearchIcon from "@mui/icons-material/Search";
export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableHead = [
    [],
    "Name",
    "Number Phone",
    "Point",
    [],
  ];
  const data = [
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    {
      name: "Dika Pradana",
      numberphone: "083463514268",
      point: "256 Point",
    },
    
  ];
  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
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
              {/* Checkbox */}
              <td className="px-4 py-2 text-center"> Checkbox</td>

              <td className="px-4 py-2 text-center">{row.name}</td>
              <td className="px-4 py-2 text-center">{row.numberphone}</td>
              <td className="px-4 py-2 text-center">{row.point}</td>
              
              {/* Action */}
              <td className="px-4 py-2 text-center"> Action </td>
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
