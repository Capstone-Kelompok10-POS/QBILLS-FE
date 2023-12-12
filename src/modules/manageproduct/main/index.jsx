"use client";

import { Pagination, SnackBar } from "@/components";
import coffeeImage from "@/public/assets/images/product-detail/image_coffee.png";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TopSection from "./TopSection";
import TableSection from "./TableSection";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import ProductDetailModal from "./ProductDetailModal";
import UpdateStockModal from "./UpdateStockModal";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
    Id: null,
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
      data.ingredients.toLowerCase().includes(search.toLowerCase());
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
    const rowToEdit = dataGET.results.find((row) => row.Id === rowId);

    if (rowToEdit) {
      setEditedData({
        Id: rowToEdit.Id,
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
      console.error(`Row with Id ${rowId} not found in data.`);
    }
  };

  const handleEditSave = async () => {
    try {
      const updatedData = await fetch(`https://qbills.biz.id/api/v1/product/${editedData.Id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editedData.name,
          category: editedData.category,
          size: editedData.size,
          price: editedData.price,
          stock: editedData.stock,
          uploadedImage: editedData.uploadedImage,
          imagePreview: editedData.imagePreview,
        }),
      });

      if (!updatedData.ok) {
        throw new Error("Update request failed");
      }

      const responseData = await updatedData.json();

      setDataGET((prevData) => {
        const updatedResults = prevData.results.map((rowToEdit) => {
          if (rowToEdit.Id === responseData.result.Id) {
            return responseData.result;
          }
          return rowToEdit;
        });

        return { ...prevData, results: updatedResults };
      });

      setIsEdit(false);
      setSnackbar({
        variant: "success",
        size: "sm",
        label: "Success",
        desc: `Congratulations, you have successfully edited the product`,
        onClickClose: handleCloseSnackbar,
        onClickAction: {},
      });

      setTimeout(() => {
        setSnackbar(null);
      }, 3000);
    } catch (error) {
      setIsEdit(false);
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

  const handlePrice = (index, value) => {
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

  const handleCloseProductDetail = () => {
    setIsProductDetail(false);
  };

  const handleToggleUpdateStock = (productId) => {
    const productToUpdate = data.find((product) => product.Id === productId);

    if (productToUpdate) {
      setUpdateStockVisible(!isUpdateStockVisible);
      setQuantity(100);
      setEditedData({
        Id: productToUpdate.Id,
        name: productToUpdate.name,
        category: productToUpdate.category,
        size: productToUpdate.size,
        price: productToUpdate.price,
        stock: productToUpdate.stock,
        uploadedImage: productToUpdate.uploadedImage,
        imagePreview: productToUpdate.imagePreview,
      });
    } else {
      console.error(`Product with Id ${productId} not found in data.`);
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

  // DELETE DATA
  const handleDeleteConfirmed = async (Id) => {
    try {
      const response = await fetch(`https://qbills.biz.id/api/v1/product/${Id}`, {
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
        desc: "Congratulations, you have successfully deleted the product",
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

  const handleDelete = (Id) => {
    setSnackbar({
      variant: "error",
      size: "sm",
      label: "Delete Confirmation",
      desc: `Are you sure you want to delete this record?`,
      onClickClose: () => setSnackbar(),
      action: true,
      actionLabel: "Delete",
      onClickAction: () => handleDeleteConfirmed(Id),
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
        const selectedData = dataGET.results.find((data) => data.Id === rowId);
        return selectedData.Id;
      });

      const deleteRequests = deletedIds.map(async (ID) => {
        const response = await fetch(`https://qbills.biz.id/api/v1/product/${ID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete product with ID ${ID}`);
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
        desc: `Congratulations, you have successfully deleted ${deletedIds.length} products`,
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

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Post request failed");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleAddsave = async () => {
    try {
      const newProduct = {
        name,
        category,
        ingredients: ingredient, // Include ingredients property
        stock,
        price,
      };

      const responseData = await postData("https://qbills.biz.id/api/v1/product", newProduct);

      setDataGET((prevData) => ({
        ...prevData,
        results: [...prevData.results, responseData.result],
      }));

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

  return (
    <main className="space-y-5">
      <TopSection
        search={search}
        setSearch={setSearch}
        handleDeleteSelected={handleDeleteSelected}
        selectedRowCount={selectedRowCount}
        handleAdd={handleAdd}
      />

      <TableSection
        currentData={currentData}
        selectedRow={selectedRow}
        handleCheckbox={handleCheckbox}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggleUpdateStock={handleToggleUpdateStock}
      />

      <Pagination
        startData={indexOfFirstData >= 0 ? indexOfFirstData + 1 : 0}
        endData={Math.min(indexOfLastData, filteredData?.length) || 0}
        total={filteredData?.length || 0}
        currentPage={currentPage || 0}
        totalPage={totalPage || 0}
        onClickPrevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onClickNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
      />

      <AddProductModal
        isAdd={isAdd}
        categoryOptions={categoryOptions}
        category={category}
        handleCategoryChange={handleCategoryChange}
        name={name}
        handleNameChange={handleNameChange}
        ingredient={ingredient}
        handleIngredientChange={handleIngredientChange}
        stock={stock}
        handleStockChange={handleStockChange}
        price={price}
        handlePriceChange={handlePriceChange}
        handleAddSize={handleAddSize}
        sizeOptions={sizeOptions}
        sizeOptionsList={sizeOptionsList}
        handleSizeChange={handleSizeChange}
        handlePrice={handlePrice}
        handleDeleteSize={handleDeleteSize}
        uploadedImage={uploadedImage}
        imagePreview={imagePreview}
        handleFileChange={handleFileChange}
        handleUploadButtonClick={handleUploadButtonClick}
        setIsAdd={setIsAdd}
        handleAddsave={handleAddsave}
      />

      <EditProductModal
        isEdit={isEdit}
        categoryOptions={categoryOptions}
        editedData={editedData}
        setEditedData={setEditedData}
        handleAddSize={handleAddSize}
        sizeOptions={sizeOptions}
        sizeOptionsList={sizeOptionsList}
        handlePrice={handlePrice}
        handleDeleteSize={handleDeleteSize}
        uploadedImage={uploadedImage}
        imagePreview={imagePreview}
        handleFileChange={handleFileChange}
        handleUploadButtonClick={handleUploadButtonClick}
        setIsEdit={setIsEdit}
        handleEditSave={handleEditSave}
      />

      <ProductDetailModal
        isProductDetail={isProductDetail}
        sizeOptionsList={sizeOptionsList}
        handleSizeChange={handleSizeChange}
        handleCloseProductDetail={handleCloseProductDetail}
      />

      <UpdateStockModal
        isUpdateStockVisible={isUpdateStockVisible}
        coffeeImage={coffeeImage}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        setUpdateStockVisible={setUpdateStockVisible}
        handleSubmit={handleSubmit}
      />

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
    </main>
  );
};
