import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <h1>eCommerce</h1>
      <Link to="/products">
        <button>Shop all products</button>
      </Link>
    </div>
  );
}
