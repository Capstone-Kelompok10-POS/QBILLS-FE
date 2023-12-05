"use client";
import { useState, useEffect } from "react";
import { Button, Input, Table, Checkbox, IconButton, Pagination, SnackBar } from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableHead = [[], "Fullname", "Username", "Password", []];
  const [isAdd, setIsAdd] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 2,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 3,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 4,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 5,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 6,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 7,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 8,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 9,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 10,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 11,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 12,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 14,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 15,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 16,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 17,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
    {
      id: 18,
      fullname: "Joe Mama",
      username: "Joe",
      password: "JoeMama123",
    },
  ]);

  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.fullname.toLowerCase().includes(search.toLowerCase()) ||
      row.username.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const perPage = 10;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData.length / perPage);

  const handleAdd = () => {
    setIsAdd(true);
  };

  const handleCloseAdd = () => {
    setIsAdd(false);
  };

  return (
    <main className="space-y-5">
      {/* HEADER */}
      <section className="flex w-full gap-5">
        <div>
          <p className="text-2xl font-semibold">List Account Cashier</p>
        </div>
        <div className="ms-auto w-3/12">
          <Input
            type={"text"}
            size={"sm"}
            label={"Search Account"}
            name={"search"}
            value={search}
            endIcon={<SearchIcon sx={{ fontSize: 30 }} />}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5 self-stretch">
          <div>
            <Button size={"md-full"} label={`Delete (0)`} color={"error"} disabled={true} />
          </div>
          <div>
            <Button size={"md-full"} label={"Add Account"} onClick={handleAdd} />
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="z-10 max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
        <Table tableHead={tableHead}>
          {currentData.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
              <td className="px-4 py-2 text-center ">
                <div className="flex items-center justify-center">
                  <Checkbox />
                </div>
              </td>
              <td className="px-4 py-2 text-center">{row.fullname}</td>
              <td className="px-4 py-2 text-center">{row.username}</td>
              <td className="px-4 py-2 text-center">{row.password}</td>

              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center">
                  <span>
                    <IconButton
                      size={"sm"}
                      color={"success"}
                      icon={<EditIcon fontSize="small" />}
                    />
                  </span>
                  <span className="mx-2">
                    <IconButton
                      size={"sm"}
                      color={"error"}
                      icon={<DeleteIcon fontSize="small" />}
                    />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </section>

      {/* PAGINATION */}
      <section>
        {" "}
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
      </section>

      {/* POP UP ADD ACCOUNT */}
      {isAdd && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <div className="w-2/5 rounded-xl bg-N1 p-8">
            <div className="rounded-xl border border-N2 p-8">
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between self-stretch">
                  <h1 className="text-2xl font-semibold">Add Account Cashier</h1>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Fullname</h2>
                    <Input type={"text"} size={"sm"} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Username</h2>
                    <Input type={"text"} size={"sm"} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Password</h2>
                    <Input type={"text"} size={"sm"} />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-4 self-stretch">
                  <Button
                    type={"button"}
                    variant={"outline"}
                    size={"md-full"}
                    label={"Cancel"}
                    onClick={handleCloseAdd}
                  />
                  <Button type={"button"} size={"md-full"} label={"Save"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
