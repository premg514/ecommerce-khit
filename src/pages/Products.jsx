import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Mosaic, ThreeDot } from "react-loading-indicators";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(function () {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);


  const filter_prods = products.filter((each) =>
    each?.brand?.toLowerCase().includes(search),
  );
  return (
    <div className="products-page">
      <h1 className="products-title">Products</h1>


      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      
      
      <ul className="products-grid">
        {products.length > 0 ? (
          filter_prods.map(function (prod) {
            return <ProductCard key={prod.id} prod={prod} />;
          })
        ) : (
          <li className="products-loader">
            <Mosaic color="#32cd32" size="medium" text="" textColor="" />
          </li>
        )}
      </ul>
    </div>
  );
}
