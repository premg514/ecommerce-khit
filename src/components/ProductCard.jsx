import React from "react";

export default function ProductCard({ prod }) {
  console.log("images", prod.images);
  return (
    <li>
      {/* images */}
      {prod.images.map(function (image) {
        return <img src={image} />;
      })}
      <h1>{prod.brand ? prod.brand : "BRAND"}</h1>
      <p>{prod.description}</p>
      <p>{prod.price}</p>
    </li>
  );
}
