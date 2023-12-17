import React, { useState } from "react";
import { ProductDetail } from "@/components";

export const ComponentProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("Small", "Normal", "Big");

  const sizeOptionsList = ["Small", "Normal", "Big"];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      {/* 
          category={Coffee | Non Coffee | Snack | Meal}
          name={""}
          stock={""}
          ingredient={
            ""
          }
          imagePreview={""}
          size={"Small | Normal | Big "}
          price={""}
          sizeOptionsList={}
          onSizeChange={}
      */}

      <section className="flex flex-col items-center gap-5">
        <ProductDetail
          category={"Coffee"}
          name={"Cappuccino Espresso"}
          stock={"250"}
          ingredient={
            "Cappuccino Espresso is a coffee drink that stands out by combining espresso and steamed milk in proportions that provide perfect harmony between the strength of the coffee and the smoothness of the milk. The main advantage of latte lies in its balanced taste and creaminess, creating a smooth and satisfying coffee experience."
          }
          imagePreview={"/assets/images/product-detail/image_coffee.png"}
          size={"Big"}
          price={"Rp. 25.000"}
          sizeOptionsList={sizeOptionsList}
          onSizeChange={handleSizeChange}
        />

        <ProductDetail
          category={"Non Coffee"}
          name={"Matcha"}
          stock={"20"}
          ingredient={
            "Matcha is a type of powdered green tea that originated in Japan. It is made from shade-grown tea leaves, which are finely ground into a vibrant green powder. The preparation of matcha involves whisking the powder with hot water to create a frothy, smooth beverage."
          }
          imagePreview={"/assets/images/product-detail/non-coffee.png"}
          price={"Rp. 15.000"}
        />
      </section>
    </>
  );
};
