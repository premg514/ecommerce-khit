import React from "react";

export default function ProductCard({ prod }) {
  return (
    <li className="product-card">
      <img
        className="product-card-image"
        src={prod.thumbnail || prod.images[0]}
        alt={prod.title}
      />
      <div className="product-card-body">
        <h2 className="product-card-brand">{prod.brand ? prod.brand : "BRAND"}</h2>
        <p className="product-card-desc">{prod.description}</p>
        <p className="product-card-price">${prod.price}</p>
      </div>
    </li>
  );
}
