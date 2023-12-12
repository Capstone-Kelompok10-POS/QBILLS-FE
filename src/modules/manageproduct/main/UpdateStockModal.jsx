import Image from "next/image";

const UpdateStockModal = ({
  isUpdateStockVisible,
  coffeeImage,
  quantity,
  handleQuantityChange,
  setUpdateStockVisible,
  handleSubmit,
}) => {
  if (!isUpdateStockVisible) return null;

  return (
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
              <button type="submit" className="ml-2 w-1/2 rounded-md bg-[#BE8465] p-2 text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UpdateStockModal;
