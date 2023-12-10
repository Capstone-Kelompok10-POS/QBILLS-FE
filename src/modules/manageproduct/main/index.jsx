"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  Button,
  Select,
  Input,
  Table,
  Checkbox,
  IconButton,
  Pagination,
  SnackBar,
  ProductDetail,
} from "@/components";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import coffeeImage from "@/public/assets/images/product-detail/image_coffee.png";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableHead = ["Checkbox", "Code", "Name", "Category", "Ingredients", "Action"];
  const [isUpdateStockVisible, setUpdateStockVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedRowCount, setSelectedRowCount] = useState(0);
  const [snackbar, setSnackbar] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [sizeOptions, setSizeOptions] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isProductDetail, setIsProductDetail] = useState(false);
  const [quantity, setQuantity] = useState(100);
  const session = useSession();
  const token = session.data?.user?.results.token;
  const [dataGET, setDataGET] = useState();

  const categoryOptions = ["Coffee", "Non Coffee", "Snack", "Meal"];
  const sizeOptionsList = ["Small", "Normal", "Big"];

  const [editedData, setEditedData] = useState({
    id: null,
    name: "",
    category: "",
    size: "",
    price: "",
    stock: "",
    uploadedImage: null,
    imagePreview: null,
  });

  const fetchGET = async () => {
    try {
      const response = await fetch("https://qbills.biz.id/api/v1/products", {
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

  const filteredData = dataGET?.results?.filter((data) => {
    const matchesSearch =
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.phoneNumber.toLowerCase().includes(search.toLowerCase());
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

  const handleEdit = (rowId) => {
    const rowToEdit = data.find((row) => row.id === rowId);
    if (rowToEdit) {
      setEditedData({
        id: rowToEdit.id,
        name: rowToEdit.name,
        category: rowToEdit.category,
        size: rowToEdit.size,
        price: rowToEdit.price,
        stock: rowToEdit.stock,
        uploadedImage: rowToEdit.uploadedImage,
        imagePreview: rowToEdit.imagePreview,
      });
      setIsEdit(true);
    } else {
      console.error(`Row with id ${rowId} not found in data.`);
    }
  };

  const handleEditSave = () => {
    const updatedData = data.map((rowToEdit) => {
      if (rowToEdit.id === editedData.id) {
        return {
          ...rowToEdit,
          name: editedData.name,
          category: editedData.category,
          size: editedData.size,
          price: editedData.price,
          stock: editedData.stock,
          uploadedImage: editedData.uploadedImage,
          imagePreview: editedData.imagePreview,
        };
      }
      return rowToEdit;
    });

    setData(updatedData);

    setIsEdit(false);
    setSnackbar({
      variant: "success",
      size: "sm",
      label: "Success",
      desc: `Congratulations, you have successfully edited the Membership`,
      onClickClose: handleCloseSnackbar,
      onClickAction: {},
    });

    setTimeout(() => {
      setSnackbar(null);
    }, 3000);
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
        onClickAction: () => {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 3000);
    } catch (error) {
      handleCloseSnackbar();
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: error.message,
        onClickClose: handleCloseSnackbar,
        onClickAction: () => {},
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
        onClickAction: () => {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 3000);
    } catch (error) {
      handleCloseSnackbar();
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: error.message,
        onClickClose: handleCloseSnackbar,
        onClickAction: () => {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 3000);
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

  const handleAddsave = () => {
    try {
      if (!category || !name || !ingredient || !stock || !price) {
        setSnackbar({
          variant: "error",
          size: "sm",
          label: "Error",
          desc: `Please fill in all the required fields and upload an image.`,
          onClickClose: handleCloseSnackbar,
        });
        return;
      }

      const newProduct = {
        id: data.length + 1,
        code: `ABCD123${data.length + 1}`,
        name,
        category,
        size: sizeOptions.map((option) => option.size),
        price,
        stock,
      };

      setData((prevData) => [...prevData, newProduct]);
      setIsAdd(false);
      setCategory("");
      setName("");
      setIngredient("");
      setStock("");
      setPrice("");
      setSizeOptions([]);
      setUploadedImage(null);
      setImagePreview(null);

      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: "Congratulations, you have successfully added a new Product",
        onClickClose: handleCloseSnackbar,
        onClickAction: () => {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 3000);
    } catch (error) {
      handleCloseSnackbar();
      setSnackbar({
        variant: "error",
        size: "sm",
        label: "Error",
        desc: error.message,
        onClickClose: handleCloseSnackbar,
        onClickAction: () => {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 3000);
    }
  };

  const handleAdd = () => {
    setIsAdd(!isAdd);
    if (!isAdd) {
      setCategory("");
      setName("");
      setIngredient("");
      setStock("");
      setPrice("");
      setSizeOptions([]);
      setUploadedImage(null);
    }
  };

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(null);
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

  const handleAddSize = () => {
    setSizeOptions((prevSizeOptions) => {
      const updatedSizeOptions = [...prevSizeOptions, {}];
      return updatedSizeOptions;
    });
  };

  const handleSizeChange = (index, value) => {
    setSizeOptions((prevSizeOptions) => {
      const updatedSizeOptions = [...prevSizeOptions];
      if (!updatedSizeOptions[index]) {
        updatedSizeOptions[index] = {};
      }
      updatedSizeOptions[index].size = value;
      return updatedSizeOptions;
    });
  };

  const handleDesc = (index, value) => {
    setSizeOptions((prevSizeOptions) => {
      const updatedSizeOptions = [...prevSizeOptions];
      updatedSizeOptions[index] = { price: value }; // Update the specific size option
      return updatedSizeOptions;
    });
  };

  const handleDeleteSize = (index) => {
    setSizeOptions((prevSizeOptions) => prevSizeOptions.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setUploadedImage({ file, error: null });
    }
  };
  const handleOpenProductDetail = () => {
    setIsProductDetail(true);
  };

  const handleCloseProductDetail = () => {
    setIsProductDetail(false);
  };

  const handleToggleUpdateStock = (productId) => {
    const productToUpdate = data.find((product) => product.id === productId);

    if (productToUpdate) {
      setUpdateStockVisible(!isUpdateStockVisible);
      setQuantity(100);
      setEditedData({
        id: productToUpdate.id,
        name: productToUpdate.name,
        category: productToUpdate.category,
        size: productToUpdate.size,
        price: productToUpdate.price,
        stock: productToUpdate.stock,
        uploadedImage: productToUpdate.uploadedImage,
        imagePreview: productToUpdate.imagePreview,
      });
    } else {
      console.error(`Product with id ${productId} not found in data.`);
    }
  };

  const handleQuantityChange = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue) || inputValue === "") {
      setQuantity(inputValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Quantity:", quantity);
    // Add any additional logic for handling the stock update here
  };

  return (
    <main className="space-y-5">
      {/* TOP SECTION */}
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
            type={"button"}
            size={"md"}
            label={`Delete (${selectedRowCount})`}
            color={"error"}
            onClick={handleDeleteSelected}
            disabled={selectedRowCount === 0}
          />
          <div className="w-52">
            <Button onClick={handleAdd} size={"md-full"} label={"Add product"} />
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="max-h-[60vh] min-h-[60vh] overflow-scroll rounded-lg border border-N2">
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

              <td className="cursor-pointer px-4 py-2 text-center">{row.Id}</td>

              <td className="cursor-pointer px-4 py-2 text-center">{row.name}</td>

              <td className="px-4 py-2 text-center">{row.productType.typeName}</td>

              <td className="px-4 py-2 text-center">{row.ingredients}</td>

              <td className="flex items-center justify-center gap-2 px-4 py-2">
                <IconButton
                  size={"sm"}
                  color={"success"}
                  icon={<EditIcon fontSize="small" />}
                  onClick={() => handleEdit(row.Id)}
                />
                <IconButton
                  size={"sm"}
                  color={"error"}
                  icon={<DeleteIcon fontSize="small" />}
                  onClick={() => handleDeleteIcon(row.Id)}
                />
                <IconButton
                  size={"sm"}
                  icon={<MoreVertIcon fontSize="small" />}
                  variant={"outline"}
                  onClick={() => handleToggleUpdateStock(row.Id)}
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

      {/* POP UP ADD PRODUCT */}
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
                      size="md"
                      label="Category"
                      name="category"
                      options={categoryOptions}
                      value={category}
                      onChange={(e) => handleCategoryChange(e.target.value)}
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
                        <h3 className="text-N2">Desc</h3>
                      </div>
                    </div>

                    {sizeOptions.map((sizeOption, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="flex w-full flex-col gap-2">
                          <Select
                            size="md"
                            label="Size"
                            name={`size-${index}`}
                            options={sizeOptionsList}
                            value={sizeOption.size}
                            onChange={(e) => handleSizeChange(index, e.target.value)}
                          />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                          <Input
                            label={"Desc"}
                            type={"text"}
                            size={"sm"}
                            value={sizeOption.price}
                            onChange={(e) => handleDesc(index, e.target.value)}
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
                <div className="flex w-1/2 flex-col gap-5 self-stretch">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Product Image</h2>
                    <label htmlFor="file-input" className="cursor-pointer">
                      <div className="h-80 w-full border border-N2">
                        {!uploadedImage && !imagePreview && (
                          <div className="flex h-full content-center items-center justify-center">
                            <CloudUploadIcon className="text-8xl text-N2" />
                          </div>
                        )}
                        {imagePreview && (
                          <Image
                            src={imagePreview}
                            alt="Uploaded Product"
                            className="h-full w-full object-cover"
                            width={800}
                            height={600}
                          />
                        )}
                      </div>
                    </label>
                    <input
                      type="file"
                      id="file-input"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e)}
                    />
                  </div>
                  <Button
                    type={"button"}
                    variant={"outline"}
                    size={"md-full"}
                    label={"Upload Image"}
                    onClick={handleUploadButtonClick}
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

      {/* POP UP EDIT PRODUCT */}
      {isEdit && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <div className=" w-3/5 rounded-xl bg-N1">
            <div className="flex flex-col items-start gap-10 self-stretch p-10">
              <h1 className="text-2xl font-semibold">Edit Product</h1>
              <div className="flex items-start justify-between gap-6 self-stretch">
                <div className="flex w-1/2 flex-col gap-5 self-stretch">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Category</h2>
                    <Select
                      size="md"
                      label="Category"
                      name="category"
                      options={categoryOptions}
                      value={editedData.category}
                      onChange={(e) => setEditedData({ ...editedData, category: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Name</h2>
                    <Input
                      label={"Product"}
                      type={"text"}
                      size={"sm"}
                      value={editedData.name}
                      onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Ingredient</h2>
                    <Input label={"Desc"} type={"text"} size={"md"} />
                  </div>
                  <div className="flex gap-5">
                    <div className="flex w-full flex-col gap-2">
                      <h2 className="font-semibold">Stock</h2>
                      <Input
                        label={"Available"}
                        type={"text"}
                        size={"sm"}
                        value={editedData.stock}
                        onChange={(e) => setEditedData({ ...editedData, stock: e.target.value })}
                      />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <h2 className="font-semibold">Price</h2>
                      <Input
                        label={"Rp"}
                        type={"text"}
                        size={"sm"}
                        value={editedData.price}
                        onChange={(e) => setEditedData({ ...editedData, price: e.target.value })}
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
                        <h3 className="text-N2">Desc</h3>
                      </div>
                    </div>

                    {sizeOptions.map((sizeOption, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="flex w-full flex-col gap-2">
                          <Select
                            size="md"
                            label="Size"
                            name={`size-${index}`}
                            options={sizeOptionsList}
                            value={editedData.size}
                            onChange={(e) => setEditedData({ ...editedData, size: e.target.value })}
                          />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                          <Input
                            label={"Desc"}
                            type={"text"}
                            size={"sm"}
                            value={sizeOption.price}
                            onChange={(e) => handleDesc(index, e.target.value)}
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
                <div className="flex w-1/2 flex-col gap-5 self-stretch">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">Product Image</h2>
                    <label htmlFor="file-input" className="cursor-pointer">
                      <div className="h-80 w-full border border-N2">
                        {!uploadedImage && !imagePreview && (
                          <div className="flex h-full content-center items-center justify-center">
                            <CloudUploadIcon className="text-8xl text-N2" />
                          </div>
                        )}
                        {imagePreview && (
                          <Image
                            src={imagePreview}
                            alt="Uploaded Product"
                            className="h-full w-full object-cover"
                            width={800}
                            height={600}
                          />
                        )}
                      </div>
                    </label>
                    <input
                      type="file"
                      id="file-input"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e)}
                    />
                  </div>
                  <Button
                    type={"button"}
                    variant={"outline"}
                    size={"md-full"}
                    label={"Upload Image"}
                    onClick={handleUploadButtonClick}
                  />
                  <div className="flex items-center gap-6 self-stretch">
                    <Button
                      type={"button"}
                      variant={"outline"}
                      size={"md-full"}
                      label={"Cancel"}
                      onClick={() => setIsEdit(false)}
                    />
                    <Button
                      type={"button"}
                      size={"md-full"}
                      label={"Save"}
                      onClick={handleEditSave}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SNACK BAR */}
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

      {/* PRODUCT DETAIL */}
      {isProductDetail && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <ProductDetail
            category={"Coffee"}
            name={"Cappuccino Espresso"}
            stock={"250"}
            ingredient={
              "Cappuccino Espresso is a coffee drink that stands out by combining espresso and steamed milk in proportions that provide perfect harmony between the strength of the coffee and the smoothness of the milk. The main advantage of latte lies in its balanced taste and creaminess, creating a smooth and satisfying coffee experience."
            }
            imagePreview={"/assets/images/product-detail/image_coffee.png"}
            size={"Small"}
            price={"Rp. 25.000"}
            sizeOptionsList={sizeOptionsList}
            onSizeChange={handleSizeChange}
            onClick={handleCloseProductDetail}
          />
        </section>
      )}

      {/* UPDATE STOCK SECTION */}
      {isUpdateStockVisible && (
        <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center rounded-md bg-[#E6E6E6] p-2">
              <div className="max-w-md rounded-md border border-gray-300 bg-[#E6E6E6] p-6 shadow-md">
                <p className="mb-2 pl-2 text-lg font-bold text-gray-800">Update Stock</p>
                <div className="mb-4 flex items-center rounded-md bg-[#F4F4F4] p-2">
                  <Image
                    src={coffeeImage}
                    alt="Coffee A"
                    className="mr-4 h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg font-bold text-gray-800">Coffee A</p>
                    <p className="text-sm text-gray-600">
                      Cappuccino Espresso is a coffee drink that stands out by...
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mr-2 block text-gray-800">Tambah Stock</label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="w-full rounded-md border border-[#E6E6E6] p-2 text-gray-600"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="mr-2 w-1/2 rounded-md border border-[#BE8465] bg-white p-2 text-[#BE8465]"
                    onClick={() => setUpdateStockVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-2 w-1/2 rounded-md bg-[#BE8465] p-2 text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      )}
    </main>
  );
};
