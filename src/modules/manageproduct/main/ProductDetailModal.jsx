import { ProductDetail } from "@/components";

const ProductDetailModal = ({
  isProductDetail,
  sizeOptionsList,
  handleSizeChange,
  handleCloseProductDetail,
}) => {
  if (!isProductDetail) return null;

  return (
    <section className="fixed -inset-5 z-50 flex items-center justify-center bg-black/50">
      <ProductDetail
        category={"Coffee"}
        name={"Cappuccino Espresso"}
        stock={"250"}
        ingredient={
          "Cappuccino Espresso is a coffee drink that stands out by combining espresso and steamed milk in proportions that provIde perfect harmony between the strength of the coffee and the smoothness of the milk. The main advantage of latte lies in its balanced taste and creaminess, creating a smooth and satisfying coffee experience."
        }
        imagePreview={"/assets/images/product-detail/image_coffee.png"}
        size={"Small"}
        price={"Rp. 25.000"}
        sizeOptionsList={sizeOptionsList}
        onSizeChange={handleSizeChange}
        onClick={handleCloseProductDetail}
      />
    </section>
  );
};

export default ProductDetailModal;
