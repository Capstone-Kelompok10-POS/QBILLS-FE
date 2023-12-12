import { Button, IconButton, Input, Select } from "@/components";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";

const EditProductModal = ({
  isEdit,
  categoryOptions,
  editedData,
  setEditedData,
  handleAddSize,
  sizeOptions,
  sizeOptionsList,
  handlePrice,
  handleDeleteSize,
  uploadedImage,
  imagePreview,
  handleFileChange,
  handleUploadButtonClick,
  setIsEdit,
  handleEditSave,
}) => {
  if (!isEdit) return null;

  return (
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
                    <h3 className="text-N2">Price</h3>
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
                        label={"Price"}
                        type={"text"}
                        size={"sm"}
                        value={sizeOption.price}
                        onChange={(e) => handlePrice(index, e.target.value)}
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
                  Id="file-input"
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
                <Button type={"button"} size={"md-full"} label={"Save"} onClick={handleEditSave} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProductModal;
