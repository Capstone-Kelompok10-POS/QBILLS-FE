"use client";

import { Button, Checkbox, IconButton, Input, Pagination, SnackBar, Table } from "@/components";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const Main = () => {
  const session = useSession();
  const token = session.data?.user?.results.token;
  const [dataGET, setDataGET] = useState();
  const [search, setSearch] = useState("");
  const tableHead = ["Checkbox", "Id", "Fullname", "Username", "Password", "Action"];
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [IsAdd, setIsAdd] = useState(false);
  const [snackbar, setSnackbar] = useState(null);
  const [newData, setNewData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const [editDataValues, setEditDataValues] = useState({
    id: null,
    fullname: "",
    username: "",
    password: "",
  });

  // FETCH GET / GET DATA
  const fetchGET = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/admins", {
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

  // SEARCH DATA
  const filteredData = dataGET?.results?.filter((data) => {
    const matchesSearch =
      data.username.toLowerCase().includes(search.toLowerCase()) ||
      data.fullname.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  // CHECKBOX
  const handleCheckbox = (rowId) => {
    setSelectedRow((prevSelectedRow) => {
      const isSelected = prevSelectedRow.includes(rowId);
      const updatedSelectedRow = isSelected
        ? prevSelectedRow.filter((id) => id !== rowId)
        : [...prevSelectedRow, rowId];

      setSelectedRowCount(updatedSelectedRow.length);
      return updatedSelectedRow;
    });
  };

  // PAGINATION
  useEffect(() => {
    if (dataGET?.results.length !== 0) {
      setCurrentPage(1);
    }
  }, [dataGET]);
  const perPage = 30;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData?.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData?.length / perPage);

  // EDIT DATA
  const handleEdit = (id) => {
    const selectedData = dataGET?.results?.find((data) => data.id === id);

    setEditDataValues((prevValues) => ({
      id: selectedData.id,
      fullname: selectedData.fullname || prevValues.fullname,
      username: selectedData.username || prevValues.username,
      password: selectedData.password || prevValues.password,
    }));

    setIsEdit(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://qbills.biz.id/api/v1/admin/${editDataValues.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: editDataValues.fullname,
          username: editDataValues.username,
          password: editDataValues.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Edit request failed");
      }

      await response.json();
      await fetchGET();

      setIsEdit(false);

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: "Congratulations, you have successfully edited the admin",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);
    } catch (error) {
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: "Edit data failed",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);

      console.error("Error:", error);
    }
  };

  // DELETE DATA
  const handleDeleteConfirmed = async (id) => {
    try {
      const response = await fetch(`https://qbills.biz.id/api/v1/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Delete request failed");
      }

      await response.json();
      await fetchGET();

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: "Congratulations, you have successfully deleted the admin",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);
    } catch (error) {
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: "Delete data failed",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);

      console.error("Error:", error);
    }
  };

  const handleDelete = (id) => {
    setSnackbar({
      variant: "error",
      size: "sm",
      label: "Delete Confirmation",
      desc: `Are you sure you want to delete this record?`,
      onClickClose: () => setSnackbar(),
      action: true,
      actionLabel: "Delete",
      onClickAction: () => handleDeleteConfirmed(id),
    });
  };

  const handleDeleteSelected = () => {
    if (selectedRowCount > 0) {
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Delete Confirmation",
        desc: `Are you sure you want to delete ${selectedRowCount} records?`,
        onClickClose: () => setSnackbar(),
        action: true,
        actionLabel: "Delete",
        onClickAction: () => handleDeleteSelectedConfirmed(),
      });
    }
  };

  const handleDeleteSelectedConfirmed = async () => {
    try {
      const deletedIds = selectedRow.map((rowId) => {
        const selectedData = dataGET.results.find((data) => data.id === rowId);
        return selectedData.id;
      });

      const deleteRequests = deletedIds.map(async (id) => {
        const response = await fetch(`https://qbills.biz.id/api/v1/admin/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete admin with ID ${id}`);
        }

        return response.json();
      });

      await Promise.all(deleteRequests);
      await fetchGET();

      setSelectedRow([]);
      setSelectedRowCount(0);

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: `Congratulations, you have successfully deleted ${deletedIds.length} admins`,
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);
    } catch (error) {
      setSelectedRow([]);
      setSelectedRowCount(0);

      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: "Delete data failed",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);

      console.error("Error:", error);
    }
  };

  const handleAddButtonClick = () => {
    setIsAdd(true);
  };

  const handleAdd = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/admin/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Add request failed");
      }

      await response.json();
      await fetchGET();

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: "Congratulations, you have successfully added a new admin",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);

      setNewData({
        fullname: "",
        username: "",
        password: "",
      });
      setIsAdd(false);
    } catch (error) {
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: "Add data failed",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);

      console.error("Error:", error);
    }
  };

  return (
    <main className="space-y-5">
      {/* SNACKBAR */}
      {snackbar && (
        <section className="fixed inset-0 top-10 z-50 flex justify-center">
          <SnackBar
            variant={snackbar?.variant}
            size={snackbar?.size}
            label={snackbar?.label}
            desc={snackbar?.desc}
            action={snackbar?.action}
            actionLabel={snackbar?.actionLabel}
            onClickClose={snackbar?.onClickClose}
            onClickAction={snackbar?.onClickAction}
          />
        </section>
      )}

      {/* TOP */}
      <section className="flex w-full items-center gap-5">
        <h2 className="mr-auto text-2xl font-semibold">All Admin</h2>
        <div className="w-96">
          <Input
            type={"text"}
            size={"sm"}
            label={"Search Admin"}
            name={"search"}
            value={search}
            endIcon={<SearchIcon sx={{ fontSize: 30 }} />}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <Button
            onClick={handleDeleteSelected}
            size={"md"}
            label={`Delete (${selectedRowCount})`}
            color={"error"}
            disabled={selectedRowCount === 0}
          />
          <div className="w-52">
            <Button onClick={handleAddButtonClick} size={"md-full"} label={"Add Admin"} />
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="z-10 max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
        <Table tableHead={tableHead}>
          {currentData?.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-N1" : "bg-N2.2"}`}>
              <td className="px-4 py-2 text-center ">
                <div className="flex items-center justify-center">
                  <Checkbox
                    checked={selectedRow.includes(row.id)}
                    onChange={() => handleCheckbox(row.id)}
                  />
                </div>
              </td>
              <td className="px-4 py-2 text-center">{row.id}</td>
              <td className="px-4 py-2 text-center">{row.fullname}</td>
              <td className="px-4 py-2 text-center">{row.username}</td>
              <td className="px-4 py-2 text-center">********</td>
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

      {/* PAGINATION */}
      <Pagination
        startData={indexOfFirstData >= 0 ? indexOfFirstData + 1 : 0}
        endData={Math.min(indexOfLastData, filteredData?.length) || 0}
        total={filteredData?.length || 0}
        currentPage={currentPage || 0}
        totalPage={totalPage || 0}
        onClickPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onClickNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
      />

      {IsAdd && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <div className="w-2/5 rounded-xl bg-N1 p-8">
            <div className="rounded-xl border border-N2 p-8">
              <div className="flex flex-col gap-10">
                <h1 className="text-2xl font-semibold">Add Admins</h1>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Fullname :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={newData.fullname}
                      onChange={(e) => setNewData({ ...newData, fullname: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Username :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={newData.username}
                      onChange={(e) => setNewData({ ...newData, username: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Password :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={newData.password}
                      onChange={(e) => setNewData({ ...newData, password: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-4 self-stretch">
                  <Button
                    type={"button"}
                    variant={"outline"}
                    color={"error"}
                    size={"md-full"}
                    label={"Cancel"}
                    onClick={() => setIsAdd(false)}
                  />
                  <Button
                    type={"button"}
                    color={"success"}
                    size={"md-full"}
                    label={"Add"}
                    onClick={handleAdd}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EDIT */}
      {isEdit && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <div className="w-2/5 rounded-xl bg-N1 p-8">
            <div className="rounded-xl border border-N2 p-8">
              <div className="flex flex-col gap-10">
                <h1 className="text-2xl font-semibold">Edit Admins</h1>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Fullname :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={editDataValues.fullname}
                      onChange={(e) =>
                        setEditDataValues({ ...editDataValues, fullname: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Username :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={editDataValues.username}
                      onChange={(e) =>
                        setEditDataValues({ ...editDataValues, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Password :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={editDataValues.password}
                      onChange={(e) =>
                        setEditDataValues({ ...editDataValues, password: e.target.value })
                      }
                    />
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
                    onClick={handleSave}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
