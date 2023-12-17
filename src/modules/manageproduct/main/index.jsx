"use client";

import {
  Button,
  Checkbox,
  IconButton,
  Input,
  Pagination,
  ProductDetail,
  Select,
  SnackBar,
  Table,
} from "@/components";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Main = () => {
  const session = useSession();
  const token = session.data?.user?.results.token;
  const [dataGET, setDataGET] = useState();
  const [search, setSearch] = useState("");
  const tableHead = [
    "Checkbox",
    "Code",
    "Name",
    "Category",
    "Size",
    "Price/PCS",
    "Stock",
    "Action",
  ];
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [editDataValues, setEditDataValues] = useState({});
  const [snackbar, setSnackbar] = useState(null);
  const [image, setImage] = useState();
  const [addDataValues, setAddDataValues] = useState({});
  const [isProductDetail, setIsProductDetail] = useState(false);

  // FETCH GET / GET DATA
  const fetchGET = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Fetch request failed");
      }

      const data = await response.json();

      setDataGET(data);

      return data;
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
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.id.toString().toLowerCase().includes(search.toLowerCase());
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

  const hanldeAdd = () => {
    setAddDataValues({
      productType: {
        typeName: "",
        typeDescription: "",
      },
      name: "",
      ingredients: "",
      image: "",
    });
    setImage("");
    setIsAdd(true);
  };

  const handleSaveAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productTypeId", addDataValues.productType.typeName);
    formData.append("name", addDataValues.name);
    formData.append("ingredients", addDataValues.ingredients);
    formData.append("image", image);
    formData.append("productDetail[price]", 0);
    try {
      await fetch("https://qbills.biz.id/api/v1/product", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      await fetchGET();

      setIsAdd(false);

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: "Congratulations, you have successfully add product",
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
        desc: "Add data failed",
        onClickClose: () => setSnackbar(),
      });

      setTimeout(() => {
        setSnackbar();
      }, 2000);

      console.error("Error:", error);
    }
  };

  // EDIT DATA
  const handleEdit = (id) => {
    const selectedData = dataGET?.results?.find((data) => data.id === id);
    setEditDataValues({
      id: selectedData.id,
      productType: {
        id: selectedData.productType.id,
        typeName: selectedData.productType.typeName,
        typeDescription: selectedData.productType.typeDescription,
      },
      name: selectedData.name,
      ingredients: selectedData.ingredients,
      image: selectedData.image,
      productDetail: selectedData.productDetail.map((data) => ({
        id: data.id,
        productId: data.productId,
        price: data.price,
        totalStock: 0,
        size: data.size,
      })),
    });
    setImage(selectedData.image);
    setIsEdit(true);
  };

  const handleImageChangeAdd = (e) => {
    setImage(e.target.files[0]);
    setAddDataValues((prevState) => ({
      ...prevState,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleImageChangeEdit = (e) => {
    setImage(e.target.files[0]);
    setEditDataValues((prevState) => ({
      ...prevState,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleAddDetail = async (id) => {
    if (editDataValues.productDetail.length < 3) {
      try {
        await fetch("https://qbills.biz.id/api/v1/product/detail", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: Number(id),
            price: Number(0),
            size: "",
          }),
        });

        const res = await fetchGET();

        const selectedData = res?.results?.find((data) => data.id === id);
        setEditDataValues({
          id: selectedData.id,
          productType: {
            id: selectedData.productType.id,
            typeName: selectedData.productType.typeName,
            typeDescription: selectedData.productType.typeDescription,
          },
          name: selectedData.name,
          ingredients: selectedData.ingredients,
          image: selectedData.image,
          productDetail: selectedData.productDetail.map((data) => ({
            id: data.id,
            productId: data.productId,
            price: data.price,
            totalStock: 0,
            size: data.size,
          })),
        });
        setImage(selectedData.image);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleDeleteDetail = async (id) => {
    try {
      await fetch(`https://qbills.biz.id/api/v1/product/detail/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const res = await fetchGET();

      const selectedData = res?.results?.find((data) => data.id === editDataValues.id);
      setEditDataValues({
        id: selectedData.id,
        productType: {
          id: selectedData.productType.id,
          typeName: selectedData.productType.typeName,
          typeDescription: selectedData.productType.typeDescription,
        },
        name: selectedData.name,
        ingredients: selectedData.ingredients,
        image: selectedData.image,
        productDetail: selectedData.productDetail.map((data) => ({
          id: data.id,
          productId: data.productId,
          price: data.price,
          totalStock: 0,
          size: data.size,
        })),
      });

      setImage(selectedData.image);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("productTypeId", editDataValues.productType.id);
    formData.append("name", editDataValues.name);
    formData.append("ingredients", editDataValues.ingredients);
    try {
      await fetch(`https://qbills.biz.id/api/v1/product/${editDataValues.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      await Promise.all(
        editDataValues.productDetail.map(async (detail) => {
          await fetch(`https://qbills.biz.id/api/v1/product/detail/${detail.id}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productID: editDataValues.id,
              price: Number(detail.price),
              size: detail.size,
            }),
          });

          if (detail.totalStock !== 0) {
            await fetch(`https://qbills.biz.id/api/v1/product/stocks`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                productDetailID: Number(detail.id),
                stock: Number(detail.totalStock),
              }),
            });
          }
        }),
      );

      await fetchGET();

      setIsEdit(false);

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: "Congratulations, you have successfully edited the Product",
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
      const response = await fetch(`https://qbills.biz.id/api/v1/product/${id}`, {
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
        desc: "Congratulations, you have successfully deleted the Product",
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
      desc: `Are you sure you want to delete this product?`,
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
        desc: `Are you sure you want to delete ${selectedRowCount} products?`,
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
        const response = await fetch(`https://qbills.biz.id/api/v1/product/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete product with ID ${id}`);
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
        desc: `Congratulations, you have successfully deleted ${deletedIds.length} Products`,
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

  const handleDetailProcut = (id) => {
    const selectedData = dataGET?.results?.find((data) => data.id === id);
    setEditDataValues({
      id: selectedData.id,
      productType: {
        id: selectedData.productType.id,
        typeName: selectedData.productType.typeName,
        typeDescription: selectedData.productType.typeDescription,
      },
      name: selectedData.name,
      ingredients: selectedData.ingredients,
      image: selectedData.image,
      productDetail: selectedData.productDetail.map((data) => ({
        id: data.id,
        productId: data.productId,
        price: data.price,
        totalStock: 0,
        size: data.size,
      })),
    });
    setIsProductDetail(true);
  };

  return (
    <main>
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

      <div className="space-y-5">
        {/* TOP */}
        <section className="flex w-full items-center gap-5">
          <h2 className="mr-auto text-2xl font-semibold">List Product</h2>
          <div className="w-96">
            <Input
              type={"text"}
              size={"sm"}
              label={"Search Product"}
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
              <Button onClick={hanldeAdd} size={"md-full"} label={"Add Product"} />
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
                <td className="px-4 py-2 text-center">{row.name}</td>
                <td className="px-4 py-2 text-center">{row.productType.typeName}</td>
                <td className="px-4 py-2 text-center">
                  {row.productDetail.map((detail, index) => (
                    <span key={index}>
                      {detail.size}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2 text-center">
                  {row.productDetail.map((detail, index) => (
                    <span key={index}>
                      {detail.price}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2 text-center">
                  {row.productDetail.map((detail, index) => (
                    <span key={index}>
                      {detail.totalStock}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="flex h-full items-center justify-center gap-2 px-4 py-2">
                  <IconButton
                    size={"sm"}
                    color={"success"}
                    icon={<EditIcon fontSize="small" />}
                    onClick={() => handleEdit(row.id)}
                  />
                  <IconButton
                    size={"sm"}
                    color={"error"}
                    icon={<DeleteIcon fontSize="small" />}
                    onClick={() => handleDelete(row.id)}
                  />
                  <IconButton
                    size={"sm"}
                    icon={<MoreVertIcon fontSize="small" />}
                    variant={"outline"}
                    onClick={() => handleDetailProcut(row.id)}
                  />
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
      </div>

      {/* ADD PRODUCT MODAL */}
      {isAdd && (
        <section className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-N7/50">
          <form
            onSubmit={handleSaveAdd}
            className="grid w-1/2 grid-cols-2 gap-5 rounded-xl bg-N1 p-10"
          >
            <section className="space-y-5">
              <h1 className="text-2xl font-semibold">Add Product</h1>
              <Select
                size={"sm"}
                label={"Category"}
                name={"category"}
                options={["Coffee", "Non Coffee", "Meal", "Snack"]}
                value={addDataValues.productType.typeName}
                onChange={(e) =>
                  setAddDataValues((prevState) => ({
                    ...prevState,
                    productType: {
                      ...prevState.productType,
                      typeName: e.target.value,
                    },
                  }))
                }
              />

              <Input
                type={"text"}
                size={"sm"}
                label={"Name"}
                name={"name"}
                value={addDataValues.name}
                onChange={(e) =>
                  setAddDataValues((prevState) => ({ ...prevState, name: e.target.value }))
                }
              />

              <Input
                type={"text"}
                size={"sm"}
                label={"Ingredient"}
                name={"ingredient"}
                value={addDataValues.ingredients}
                onChange={(e) =>
                  setAddDataValues((prevState) => ({
                    ...prevState,
                    ingredients: e.target.value,
                  }))
                }
              />

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold">Detail</h2>
                  <button type="button" className="cursor-not-allowed" disabled>
                    <AddIcon />
                  </button>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div>
                <input
                  type="file"
                  id="file-input"
                  name="file-input"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChangeAdd}
                />
                <label htmlFor="file-input" className="cursor-pointer">
                  <div className="flex h-[400px] w-full items-center justify-center rounded-xl border border-N2">
                    {!addDataValues.image && <CloudUploadIcon className="text-8xl text-N2" />}
                    {addDataValues.image && (
                      <Image
                        src={addDataValues.image}
                        alt="Uploaded Product"
                        width={1000}
                        height={1000}
                        className="h-fit max-h-full w-fit max-w-full"
                      />
                    )}
                  </div>
                </label>
              </div>

              <div className="flex gap-5">
                <Button
                  type={"button"}
                  variant={"outline"}
                  size={"md-full"}
                  label={"Cancel"}
                  onClick={() => setIsAdd(false)}
                />
                <Button type={"submit"} size={"md-full"} label={"Save"} />
              </div>
            </section>
          </form>
        </section>
      )}

      {/* EDIT PRODUCT MODAL */}
      {isEdit && (
        <section className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-N7/50">
          <form
            onSubmit={handleSave}
            className="grid w-1/2 grid-cols-2 gap-5 rounded-xl bg-N1 p-10"
          >
            <section className="space-y-5">
              <h1 className="text-2xl font-semibold">Edit Product</h1>
              <Select
                size={"sm"}
                label={"Category"}
                name={"category"}
                options={["Coffee", "Non Coffee", "Meal", "Snack"]}
                value={editDataValues.productType.typeName}
                onChange={(e) =>
                  setEditDataValues((prevState) => ({
                    ...prevState,
                    productType: {
                      ...prevState.productType,
                      typeName: e.target.value,
                    },
                  }))
                }
              />

              <Input
                type={"text"}
                size={"sm"}
                label={"Name"}
                name={"name"}
                value={editDataValues.name}
                onChange={(e) =>
                  setEditDataValues((prevState) => ({ ...prevState, name: e.target.value }))
                }
              />

              <Input
                type={"text"}
                size={"sm"}
                label={"Ingredient"}
                name={"ingredient"}
                value={editDataValues.ingredients}
                onChange={(e) =>
                  setEditDataValues((prevState) => ({
                    ...prevState,
                    ingredients: e.target.value,
                  }))
                }
              />

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold">Detail</h2>
                  <button
                    type="button"
                    onClick={() => handleAddDetail(editDataValues.id)}
                    className="hover:text-P4"
                  >
                    <AddIcon />
                  </button>
                </div>
                {editDataValues.productDetail.map((data, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="min-w-[120px]">
                      <Select
                        size={"sm"}
                        label={"Size"}
                        name={`size-${index}`}
                        options={["SMALL", "NORMAL", "LARGE"]}
                        value={data.size}
                        onChange={(e) =>
                          setEditDataValues((prevState) => ({
                            ...prevState,
                            productDetail: prevState.productDetail.map((item, itemIndex) =>
                              itemIndex === index ? { ...item, size: e.target.value } : item,
                            ),
                          }))
                        }
                      />
                    </div>

                    <Input
                      type={"number"}
                      size={"sm"}
                      label={"Price"}
                      name={`price-${index}`}
                      value={data.price}
                      onChange={(e) =>
                        setEditDataValues((prevState) => ({
                          ...prevState,
                          productDetail: prevState.productDetail.map((item, itemIndex) =>
                            itemIndex === index ? { ...item, price: e.target.value } : item,
                          ),
                        }))
                      }
                    />

                    <Input
                      type={"number"}
                      size={"sm"}
                      label={"Stock"}
                      name={`stock-${index}`}
                      value={data.totalStock}
                      onChange={(e) =>
                        setEditDataValues((prevState) => ({
                          ...prevState,
                          productDetail: prevState.productDetail.map((item, itemIndex) =>
                            itemIndex === index ? { ...item, totalStock: e.target.value } : item,
                          ),
                        }))
                      }
                    />

                    <button
                      type="button"
                      onClick={() => handleDeleteDetail(editDataValues.productDetail[index].id)}
                      className="text-E5 hover:text-E4"
                    >
                      <DeleteForeverIcon />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <div>
                <input
                  type="file"
                  id="file-input"
                  name="file-input"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChangeEdit}
                />
                <label htmlFor="file-input" className="cursor-pointer">
                  <div className="flex h-[400px] w-full items-center justify-center rounded-xl border border-N2">
                    {!editDataValues.image && <CloudUploadIcon className="text-8xl text-N2" />}
                    {editDataValues.image && (
                      <Image
                        src={editDataValues.image}
                        alt="Uploaded Product"
                        width={1000}
                        height={1000}
                        className="h-fit max-h-full w-fit max-w-full"
                      />
                    )}
                  </div>
                </label>
              </div>

              <div className="flex gap-5">
                <Button
                  type={"button"}
                  variant={"outline"}
                  size={"md-full"}
                  label={"Cancel"}
                  onClick={() => setIsEdit(false)}
                />
                <Button type={"submit"} size={"md-full"} label={"Save"} />
              </div>
            </section>
          </form>
        </section>
      )}

      {/* PRODUCT DETAIL */}
      {isProductDetail && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <ProductDetail
            category={editDataValues.productType.typeName}
            name={editDataValues.name}
            stock={editDataValues.productDetail[0].totalStock}
            ingredient={editDataValues.ingredients}
            imagePreview={editDataValues.image}
            size={editDataValues.productDetail[0].size}
            price={editDataValues.productDetail[0].price}
            sizeOptionsList={["Small", "Medium", "Large"]}
            onSizeChange={editDataValues.productDetail[0].size}
            onClick={() => setIsProductDetail(false)}
          />
        </section>
      )}
    </main>
  );
};
