import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Product from "./Product";

export default function Products() {
  const status = useSelector((state) => state.products.status);
  const params = useParams();
  const products = useSelector((state) => state.products.products);
  const productsInCategory = products.filter(product => product.category === params.category);

  if (status === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (status === "failed") {
    return (
      <div>
        <h1>Failed to load products</h1>
      </div>
    );
  } else if (status === "succeeded") {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "white"
          }}
        >
          {params.category.toUpperCase()}
        </h1>
        <div className="d-flex-block justify-content-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            gridGap: "2rem",
            padding: "2rem"
          }}
        >
          {productsInCategory.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
