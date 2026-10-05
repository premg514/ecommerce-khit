import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

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
          <li>loading...</li>
        )}
      </ul>
    </div>
  );
}
