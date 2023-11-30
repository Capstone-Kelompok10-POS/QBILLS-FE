"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Select,
  Table,
  Checkbox,
  IconButton,
  Pagination,
  SnackBar,
} from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableHead = [[], "Code", "Name", "Category", "Size", "Price/pcs", "Stock", []];
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [snackbar, setSnackbar] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [sizeOptions, setSizeOptions] = useState([{ size: "", price: "" }]);

  const [data, setData] = useState([
    {
      id: 1,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 2,
      code: "ABCD1235",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 3,
      code: "ABCD1236",
      name: "Alpa",
      category: "Coffee",
      size: "Medium",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 4,
      code: "ABCD1237",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 5,
      code: "ABCD1238",
      name: "Alpa",
      category: "Coffee",
      size: "-",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 6,
      code: "ABCD1239",
      name: "Alpa",
      category: "Coffee",
      size: "-",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 7,
      code: "ABCD12310",
      name: "Alpa",
      category: "Coffee",
      size: "Big",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 8,
      code: "ABCD12311",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 9,
      code: "ABCD12312",
      name: "Alpa",
      category: "Coffee",
      size: "Big",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 10,
      code: "ABCD12313",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 11,
      code: "ABCD12314",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 12,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 13,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 14,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 15,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 16,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 17,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 18,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 19,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 20,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 21,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 22,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 23,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 24,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 25,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 26,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 27,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "-",
      price: "Rp 25.000",
      stock: "200",
    },
    {
      id: 28,
      code: "ABCD1234",
      name: "Alpa",
      category: "Coffee",
      size: "Small",
      price: "Rp 25.000",
      stock: "200",
    },
  ]);

  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.code.toLowerCase().includes(search.toLowerCase()) ||
      row.name.toLowerCase().includes(search.toLowerCase());
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

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleIngredientChange = (value) => {
    setIngredient(value);
  };

  const handleStockChange = (value) => {
    setStock(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleSizeChange = (index, value) => {
    if (index < sizeOptions.length) {
      setSizeOptions((prevSizeOptions) =>
        prevSizeOptions.map((option, i) => (i === index ? { ...option, size: value } : option)),
      );
    }
  };

  const handlePriceSizeChange = (index, value) => {
    if (index < sizeOptions.length) {
      setSizeOptions((prevSizeOptions) =>
        prevSizeOptions.map((option, i) => (i === index ? { ...option, price: value } : option)),
      );
    }
  };

  const handleAddSize = () => {
    setSizeOptions((prevSizeOptions) => [...prevSizeOptions, { size: "", price: "" }]);
  };

  const handleDeleteSize = (index) => {
    if (index < sizeOptions.length) {
      setSizeOptions((prevSizeOptions) => prevSizeOptions.filter((_, i) => i !== index));
    }
  };

  // const handleImageUpload = (e) => {
  //   if (e.target.files?.length > 0) {
  //     const file = e.target.files[0];

  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       setUploadedImage(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };
  // const handleUploadButtonClick = () => {
  //   const inputElement = document.createElement("input");
  //   inputElement.type = "file";
  //   inputElement.accept = "image/*";
  //   inputElement.onchange = handleImageUpload;
  //   inputElement.click();
  // };

  const handleAddsave = () => {
    if (!category || !name || !ingredient || !stock || !price) {
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: "Please fill in all the required fields and upload an image.",
        onClickClose: handleCloseSnackbar,
      });
      return;
    }

    const newProduct = {
      id: data.length + 1,
      code: "ABCD1234",
      category,
      name,
      ingredient,
      stock,
      price,
      size,
    };

    setData((prevData) => [...prevData, newProduct]);

    setIsAdd(false);

    setSnackbar({
      variant: "success",
      size: "sm",
      label: "Success",
      desc: `Congratulations, you have successfully added a new product to our store.`,
      onClickClose: handleCloseSnackbar,
    });

    setTimeout(() => {
      setSnackbar(null);
    }, 5000);
  };

  const handleDeleteIcon = (rowId) => {
    setSnackbar({
      variant: "error",
      size: "sm",
      label: "Delete Confirmation",
      desc: `Are you sure you want to delete this record?`,
      onClickClose: handleCloseSnackbar,
      action: true,
      actionLabel: "Delete",
      onClickAction: () => handleDeleteIconConfirm(rowId),
    });
  };

  const handleDeleteSelected = () => {
    if (selectedRowCount > 0) {
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Delete Confirmation",
        desc: `Are you sure you want to delete ${selectedRowCount} records?`,
        onClickClose: handleCloseSnackbar,
        action: true,
        actionLabel: "Delete",
        onClickAction: handleDeleteSelectedConfirm,
      });
    }
  };

  const handleDeleteIconConfirm = (rowId) => {
    try {
      const updatedData = data.filter((row) => row.id !== rowId);
      setData(updatedData);
      handleCloseSnackbar();

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: `Congratulations, you have successfully deleted the Product`,
        onClickClose: handleCloseSnackbar,
        onClickAction: {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 5000);
    } catch (error) {
      handleCloseSnackbar();
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: error.message,
        onClickClose: handleCloseSnackbar,
        onClickAction: {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 10000);
    }
  };

  const handleDeleteSelectedConfirm = () => {
    try {
      const updatedData = data.filter((row, index) => !selectedRow.includes(index));
      setData(updatedData);
      setSelectedRow([]);
      setSelectedRowCount(0);
      handleCloseSnackbar();

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: `Congratulations, you have successfully deleted ${selectedRowCount} Products`,
        onClickClose: handleCloseSnackbar,
        onClickAction: {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 5000);
    } catch (error) {
      handleCloseSnackbar();
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: error.message,
        onClickClose: handleCloseSnackbar,
        onClickAction: {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 10000);
    }
  };

  useEffect(() => {
    setSelectedRowCount(selectedRow.length);
  }, [selectedRow]);

  const handleCheckboxChange = (rowIndex) => {
    setSelectedRow((prevSelectedRow) => {
      if (prevSelectedRow.includes(rowIndex)) {
        return prevSelectedRow.filter((index) => index !== rowIndex);
      } else {
        return [...prevSelectedRow, rowIndex];
      }
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(null);
  };

  return (
    <main className="space-y-5">
      <section className="flex w-full gap-5 ">
        <div className="w-7/12">
          <p className="text-2xl font-semibold">List Product</p>
        </div>
        <div className="ms-auto w-3/12">
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
        <div className="w-2/12 flex-col">
          <div>
            <Button onClick={handleAdd} size={"md-full"} label={"Add product"} />
          </div>
          <div className="mt-5">
            <Button
              onClick={handleDeleteSelected}
              size={"md-full"}
              label={`Delete Product (${selectedRowCount})`}
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
                  <Checkbox
                    checked={selectedRow.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </div>
              </td>
              <td className="px-4 py-2 text-center">{row.code}</td>
              <td className="px-4 py-2 text-center">{row.name}</td>
              <td className="px-4 py-2 text-center">{row.category}</td>
              <td className="px-4 py-2 text-center">{row.size}</td>
              <td className="px-4 py-2 text-center">{row.price}</td>
              <td className="px-4 py-2 text-center">{row.stock}</td>

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
                      onClick={() => handleDeleteIcon(row.id)}
                    />
                  </span>
                  <span>
                    <IconButton
                      size={"sm"}
                      icon={<MoreVertIcon fontSize="small" />}
                      variant={"outline"}
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
      {isAdd && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <div className=" w-3/5 rounded-xl bg-N1">
            <div className="flex flex-col items-start gap-10 self-stretch p-10">
              <h1 className="text-2xl font-semibold">Add New Product</h1>
              <div className="flex items-start justify-between gap-6 self-stretch">
                <div className="flex w-1/2 flex-col gap-5 self-stretch">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Category</h2>
                    <Select
                      label={"Select"}
                      options={["Coffee", "Non Coffee", "Snack", "Meal"]}
                      size={"sm"}
                      value={category || ""}
                      onChange={handleCategoryChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Name</h2>
                    <Input
                      label={"Product"}
                      type={"text"}
                      size={"sm"}
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Ingredient</h2>
                    <Input
                      label={"Desc"}
                      type={"text"}
                      size={"md"}
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-5">
                    <div className="flex w-full flex-col gap-2">
                      <h2 className="font-semibold">Stock</h2>
                      <Input
                        label={"Available"}
                        type={"text"}
                        size={"sm"}
                        value={stock}
                        onChange={(e) => handleStockChange(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <h2 className="font-semibold">Price</h2>
                      <Input
                        label={"Rp"}
                        type={"text"}
                        size={"sm"}
                        value={price}
                        onChange={(e) => handlePriceChange(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 self-stretch">
                    <div className="flex items-center justify-between gap-2 self-stretch">
                      <h2 className="font-semibold">Size</h2>
                      <div className="flex items-start gap-2">
                        <IconButton
                          size={"sm"}
                          variant={"outline"}
                          icon={<AddIcon fontSize="small" />}
                          onClick={handleAddSize}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex w-full flex-col gap-2">
                        <h3 className="text-N2">Detail</h3>
                      </div>
                      <div className="flex w-full flex-col gap-2">
                        <h3 className="text-N2">Price</h3>
                      </div>
                    </div>

                    {sizeOptions.map((sizeOption, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="flex w-full flex-col gap-2">
                          <Select
                            label={"Select"}
                            options={["Small", "Large"]}
                            size={"sm"}
                            value={sizeOption.size}
                            onChange={(value) => handleSizeChange(index, value)}
                          />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                          <Input
                            label={"Desc"}
                            type={"text"}
                            size={"sm"}
                            value={sizeOption.price}
                            onChange={(e) => handlePriceSizeChange(index, e.target.value)}
                          />
                        </div>
                        <IconButton
                          size={"sm"}
                          variant={"outline"}
                          icon={<DeleteIcon fontSize="small" />}
                          onClick={() => handleDeleteSize(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex w-1/2 flex-col gap-10 self-stretch">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Product Image</h2>
                    <div className="h-80 w-full border border-N2">
                      {!uploadedImage && (
                        <div className="flex h-full content-center items-center justify-center">
                          <CloudUploadIcon className="text-8xl text-N2" />
                        </div>
                      )}
                      {uploadedImage && (
                        <Image
                          src={uploadedImage}
                          alt="Uploaded Product"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <Button
                    type={"button"}
                    variant={"outline"}
                    size={"md-full"}
                    label={"Upload Image"}
                    // onClick={handleUploadButtonClick}
                  />
                  <div className="flex items-center gap-6 self-stretch">
                    <Button
                      type={"button"}
                      variant={"outline"}
                      size={"md-full"}
                      label={"Cancel"}
                      onClick={() => setIsAdd(false)}
                    />
                    <Button
                      type={"button"}
                      size={"md-full"}
                      label={"Save"}
                      onClick={handleAddsave}
                    />
                  </div>
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
