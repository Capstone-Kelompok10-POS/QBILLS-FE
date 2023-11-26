"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Table,
  Checkbox,
  IconButton,
  Pagination,
  SnackBar,
  CardMembership,
} from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableHead = [[], "Name", "Number Phone", "Point", []];
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [snackbar, setSnackbar] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [editedData, setEditedData] = useState({
    id: null,
    name: "",
    numberphone: "",
    point: "",
  });
  const [data, setData] = useState([
    { id: 1, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 2, name: "Nabiel", numberphone: "083463514268", point: "256 Point" },
    { id: 3, name: "Alpa", numberphone: "083463514268", point: "256 Point" },
    { id: 4, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 5, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 6, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 7, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 8, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 9, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 10, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 11, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 12, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 13, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 14, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 15, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 16, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 17, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 18, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 19, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 20, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 21, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 22, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 23, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 24, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 25, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 26, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 27, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
    { id: 28, name: "Dika Pradana", numberphone: "083463514268", point: "256 Point" },
  ]);

  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.numberphone.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });
  const perPage = 10;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData.length / perPage);

  const handleCheckboxChange = (rowIndex) => {
    setSelectedRow((prevSelectedRow) =>
      prevSelectedRow.includes(rowIndex)
        ? prevSelectedRow.filter((index) => index !== rowIndex)
        : [...prevSelectedRow, rowIndex],
    );
  };

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

  const handleDeleteSelected = () => {
    setSnackbar({
      variant: "error",
      size: "sm",
      label: "Delete Confirmation",
      desc: `Are you sure you want to delete ${selectedRowCount} records?`,
      onClickClose: handleCloseSnackbar,
      action: true,
      actionLabel: "Delete",
      onClickAction: handleDeleteConfirm,
    });
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
    const updatedData = data.filter((row) => row.id !== rowId);
    setData(updatedData);

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

  useEffect(() => {
    setSelectedRowCount(selectedRow.length);
  }, [selectedRow]);

  const handleCloseSnackbar = () => {
    setSnackbar(null);
  };

  const handleOpenCard = () => {
    setIsEdit(false);
    setIsOpenCard(true);
  };

  const handleCloseCard = () => {
    setIsOpenCard(false);
  };
  return (
    <main className="space-y-5">
      <section className="flex w-full gap-5 ">
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
        <div className="w-2/12 flex-col">
          <div>
            <Button onClick={() => {}} size={"md-full"} label={"Print Card"} />
          </div>
          <div className="mt-5">
            <Button
              onClick={handleDeleteSelected}
              size={"md-full"}
              label={`Delete Member (${selectedRowCount})`}
              color={"error"}
              disabled={selectedRowCount === 0}
            />
          </div>
        </div>
      </section>
      <section className="z-10 max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
        <Table tableHead={tableHead}>
          {currentData.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
              <td className="px-4 py-2 text-center ">
                <div className="flex items-center justify-center">
                  <Checkbox onChange={() => handleCheckboxChange(index)} />
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
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
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
                      onClick={() => {
                        handleOpenCard();
                      }}
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
      {isOpenCard && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <CloseRoundedIcon
            fontSize="large"
            className="z-20 -mt-96 mb-10 mr-5 cursor-pointer text-white"
            onClick={() => {
              handleCloseCard();
            }}
          />
          <CardMembership name={editedData.name} />
        </section>
      )}
    </main>
  );
};
