import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  useEffect(function () {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  console.log(product);
  return (
    <div>
      <h1>Specific product: {product.brand}</h1>
    </div>
  );
}
