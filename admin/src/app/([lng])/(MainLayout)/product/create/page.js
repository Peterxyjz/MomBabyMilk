"use client";
import ProductForm from "@/Components/Product/ProductForm";

import { useState } from "react";

const ProductCreate = () => {
  const [resetKey, setResetKey] = useState(false);

  return (
    <ProductForm
      setResetKey={setResetKey}
      title={"Thêm sản phẩm"}
      key={resetKey}
    />
  );
};

export default ProductCreate;