"use client";
import { useState } from "react";
import { Button, Input, Table, Checkbox, IconButton, Pagination } from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableHead = [[], "Name", "Number Phone", "Point", []];
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

  const [selectedRow, setSelectedRow] = useState([]);
  const handleCheckboxChange = (rowId) => {
    setSelectedRow((prevSelectedRow) =>
      prevSelectedRow.includes(rowId)
        ? prevSelectedRow.filter((id) => id !== rowId)
        : [...prevSelectedRow, rowId],
    );
  };
  return (
    <main className="space-y-5">
      <section className="flex w-full items-center gap-5 ">
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
      <section className="z-10 max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
        <Table tableHead={tableHead}>
          {currentData.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
              <td className="px-4 py-2 text-center ">
                <div className="flex items-center justify-center">
                  <Checkbox onChange={() => handleCheckboxChange(row.id)} />
                </div>
              </td>

              <td className="px-4 py-2 text-center">{row.name}</td>
              <td className="px-4 py-2 text-center">{row.numberphone}</td>
              <td className="px-4 py-2 text-center">{row.point}</td>

              {/* Action */}
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center">
                  <span>
                    <IconButton
                      size={"sm"}
                      color={"success"}
                      icon={<EditIcon fontSize="small" />}
                      onChange={() => handleEdit(row.id)}
                    />
                  </span>
                  <span className="mx-2">
                    <IconButton
                      size={"sm"}
                      color={"error"}
                      icon={<DeleteIcon fontSize="small" />}
                      onChange={() => handleDelete(row.id)}
                    />
                  </span>
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
