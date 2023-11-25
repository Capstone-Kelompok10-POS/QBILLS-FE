"use client";
import { useState } from "react";
import { Button, Input, Table, Checkbox, IconButton, Pagination, SnackBar } from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

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

  const [snackbar, setSnackbar] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editedData, setEditedData] = useState({
    id: null,
    name: "",
    numberphone: "",
    point: "",
  });

  const handleEdit = (rowId) => {
    const rowToEdit = data.find((row) => row.id === rowId);
    setEditedData({
      id: rowToEdit.id,
      name: rowToEdit.name,
      numberphone: rowToEdit.numberphone,
      point: rowToEdit.point,
    });
    setIsEdit(true);
  };

  const handleEditSave = () => {
    setIsEdit(false);
    setSnackbar({
      variant: "success",
      size: "sm",
      label: "Success",
      desc: `Congratulations, you have successfully Edit Membership`,
      onClickClose: handleCloseSnackbar,
      onClickAction: {},
    });

    setTimeout(() => {
      setSnackbar(null);
    }, 5000);
  };

  const handleDelete = (rowId) => {
    setSnackbar({
      variant: "error",
      size: "sm",
      label: "Delete Confirmation",
      desc: `Are you sure you want to delete this record?`,
      onClickClose: handleCloseSnackbar,
      action: true,
      actionLabel: "Delete",
      onClickAction: () => handleDeleteConfirm(rowId),
    });
  };

  const handleDeleteConfirm = (rowId) => {
    // const updatedData = data.filter((row) => row.id !== rowId);
    // setData(updatedData);

    handleCloseSnackbar();
    setSnackbar({
      variant: "success",
      size: "sm",
      label: "Success",
      desc: `Congratulations, you have successfully Delete Membership`,
      onClickClose: handleCloseSnackbar,
      onClickAction: {},
    });

    setTimeout(() => {
      setSnackbar(null);
    }, 5000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(null);
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
                      onClick={() => handleEdit(row.id)}
                    />
                  </span>
                  <span className="mx-2">
                    <IconButton
                      size={"sm"}
                      color={"error"}
                      icon={<DeleteIcon fontSize="small" />}
                      onClick={() => handleDelete(row.id)}
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
      {isEdit && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-2/5 rounded-xl bg-N1 p-8">
            <div className="rounded-xl border border-N2 p-8">
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between self-stretch">
                  <h1 className="text-2xl font-semibold">Edit Membership</h1>
                  <div className="flex items-start gap-2">
                    <Button
                      type={"button"}
                      variant={"outline"}
                      size={"sm"}
                      label={"View Card"}
                      onClick={() => {}}
                    />
                    <IconButton
                      size={"sm"}
                      color={"warning"}
                      icon={<PrintOutlinedIcon fontSize="small" />}
                      onClick={() => {}}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Name :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={editedData.name}
                      onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Number Phone :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={editedData.numberphone}
                      onChange={(e) =>
                        setEditedData({ ...editedData, numberphone: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Point :</h2>
                    <Input type={"text"} size={"sm"} value={editedData.point} disabled={true} />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-4 self-stretch">
                  <Button
                    type={"button"}
                    variant={"outline"}
                    color={"error"}
                    size={"md-full"}
                    label={"Cancel"}
                    onClick={() => setIsEdit(false)}
                  />
                  <Button
                    type={"button"}
                    color={"success"}
                    size={"md-full"}
                    label={"Save"}
                    onClick={handleEditSave}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {snackbar && (
        <section className="fixed inset-0 top-10 z-50 flex justify-center">
          <SnackBar
            variant={snackbar.variant}
            size={snackbar.size}
            label={snackbar.label}
            desc={snackbar.desc}
            action={snackbar.action}
            actionLabel={snackbar.actionLabel}
            onClickClose={snackbar.onClickClose}
            onClickAction={snackbar.onClickAction}
          />
        </section>
      )}
    </main>
  );
};