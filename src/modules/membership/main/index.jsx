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
import { useSession } from "next-auth/react";

export const Main = () => {
  const session = useSession();
  const token = session.data?.user?.results.token;
  const [dataGET, setDataGET] = useState();

  const [search, setSearch] = useState("");
  const tableHead = ["Checkbox", "Name", "Number Phone", "Point", "Action"];
  // const [selectedRow, setSelectedRow] = useState([]);
  // const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [editDataValue, setEditDataValue] = useState();
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [snackbar, setSnackbar] = useState(null);

  // FETCH GET / GET DATA
  const fetchGET = async () => {
    fetch("https://qbills.biz.id/api/v1/memberships", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    })
      .then((response) => response.json())
      .then((data) => setDataGET(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (token) {
      fetchGET();
    }
  }, [token]);

  // SEARCH DATA
  const filteredData = dataGET?.results?.filter((data) => {
    const matchesSearch =
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.phoneNumber.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  // PAGINATION
  const perPage = 30;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData?.slice(indexOfFirstData, indexOfLastData);
  const totalPage = Math.ceil(filteredData?.length / perPage);

  // EDIT DATA
  const handleEdit = (id) => {
    const selectedData = dataGET?.results?.find((data) => data.id === id);

    setEditDataValue({
      id: selectedData.id,
      name: selectedData.name,
      phoneNumber: selectedData.phoneNumber,
      point: selectedData.point,
    });

    setIsEdit(true);
  };

  const handleSave = async () => {
    fetch(`https://qbills.biz.id/api/v1/membership/${editDataValue.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: editDataValue.name, phoneNumber: editDataValue.phoneNumber }),
    })
      .then((response) => response.json())
      .then(() => fetchGET())
      .catch((error) => {
        console.error("Error:", error);
      });

    setIsEdit(false);

    setSnackbar({
      variant: "success",
      size: "sm",
      label: "Success",
      desc: `Congratulations, you have successfully Edit Membership`,
      onClickClose: () => setSnackbar(),
    });

    setTimeout(() => {
      setSnackbar();
    }, 2000);
  };

  // DELETE DATA
  const handleDeleteConfirmed = async (id) => {
    fetch(`https://qbills.biz.id/api/v1/membership/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => fetchGET())
      .catch((error) => {
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
      });

    setSnackbar({
      variant: "success",
      size: "sm",
      label: "Success",
      desc: "Congratulations, you have successfully deleted the Membership",
      onClickClose: () => setSnackbar(),
    });

    setTimeout(() => {
      setSnackbar();
    }, 2000);
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

  // const handleDeleteSelected = () => {
  //   if (selectedRowCount > 0) {
  //     setSnackbar({
  //       variant: "error",
  //       size: "sm",
  //       label: "Delete Confirmation",
  //       desc: `Are you sure you want to delete ${selectedRowCount} records?`,
  //       onClickClose: ()=>setSnackbar(),
  //       action: true,
  //       actionLabel: "Delete",
  //       onClickAction: handleDeleteSelectedConfirm,
  //     });
  //   }
  // };

  // const handleDeleteSelectedConfirm = () => {
  //   try {
  //     const updatedData = data.filter((row, index) => !selectedRow.includes(index));
  //     setData(updatedData);
  //     setSelectedRow([]);
  //     setSelectedRowCount(0);
  //     setSnackbar();

  //     setSnackbar({
  //       variant: "success",
  //       size: "sm",
  //       label: "Success",
  //       desc: `Congratulations, you have successfully deleted ${selectedRowCount} Memberships`,
  //       onClickClose: ()=>setSnackbar(),
  //       onClickAction:()=> {}
  //     });

  //     setTimeout(() => {
  //       setSnackbar();
  //     }, 5000);
  //   } catch (error) {
  //     setSnackbar();
  //     setSnackbar({
  //       variant: "error",
  //       size: "sm",
  //       label: "Error",
  //       desc: error.message,
  //       onClickClose: ()=>setSnackbar(),
  //       onClickAction:()=> {}
  //     });

  //     setTimeout(() => {
  //       setSnackbar();
  //     }, 10000);
  //   }
  // };

  // useEffect(() => {
  //   setSelectedRowCount(selectedRow.length);
  // }, [selectedRow]);

  // const handleCheckboxChange = (rowIndex) => {
  //   setSelectedRow((prevSelectedRow) => {
  //     if (prevSelectedRow.includes(rowIndex)) {
  //       return prevSelectedRow.filter((index) => index !== rowIndex);
  //     } else {
  //       return [...prevSelectedRow, rowIndex];
  //     }
  //   });
  // };

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
        <div className="ms-auto flex w-3/12  items-center justify-end gap-5">
          {/* <Button
            onClick={handleDeleteSelected}
            size={"md"}
            label={`Delete (${selectedRowCount})`}
            color={"error"}
            disabled={selectedRowCount === 0}
          /> */}
          <div className="w-52">
            <Button onClick={() => {}} size={"md-full"} label={"Print Card"} />
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
                  {/* <Checkbox
                    checked={selectedRow.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  /> */}
                </div>
              </td>
              <td className="px-4 py-2 text-center">{row.name}</td>
              <td className="px-4 py-2 text-center">{row.phoneNumber}</td>
              <td className="px-4 py-2 text-center">{row.point}</td>

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
        startData={indexOfFirstData + 1}
        endData={Math.min(indexOfLastData, filteredData?.length) || 0}
        total={filteredData?.length || 0}
        currentPage={currentPage}
        totalPage={totalPage || 1}
        onClickPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onClickNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
      />

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
                      onClick={() => setIsOpenCard(true)}
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
                      value={editDataValue.name}
                      onChange={(e) => setEditDataValue({ ...editDataValue, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Number Phone :</h2>
                    <Input
                      type={"text"}
                      size={"sm"}
                      value={editDataValue.phoneNumber}
                      onChange={(e) =>
                        setEditDataValue({ ...editDataValue, phoneNumber: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Point :</h2>
                    <Input type={"text"} size={"sm"} value={editDataValue.point} disabled={true} />
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

      {isOpenCard && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <CardMembership name={editDataValue.name} onClick={() => setIsOpenCard(false)} />
        </section>
      )}
    </main>
  );
};
