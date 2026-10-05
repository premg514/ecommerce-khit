import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Mosaic, ThreeDot } from "react-loading-indicators";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.length > 0 ? (
          products.map(function (prod) {
            return <ProductCard key={prod.id} prod={prod} />;
          })
        ) : (
          <Mosaic color="#32cd32" size="medium" text="" textColor="" />
        )}
      </ul>
    </div>
  );
}
