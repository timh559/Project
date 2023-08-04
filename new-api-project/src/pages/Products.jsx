import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { Container, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router";


export default function Products() {
  const status = useSelector((state) => state.products.status);
  const params = useParams();
  const products = useSelector((state) => state.products.products);
  const productsInCategory = products.filter(product => product.category === params.category);
  const currentUser = useAuth();
  const isLoggedIn = currentUser.currentUser !== null;
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  }

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
      <>
      <div
        style={{
          textAlign: "center",
          color: "white",
          margin: "1% auto",
        }}
      >
        {isLoggedIn && (
          <Container>
            <p>
              Logged in as: {currentUser.currentUser.email}
              <Button
                className="mt-2 mb-2 p-2 mx-auto"
                variant="link"
                size="sm"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </p>
          </Container>
        )}
      </div>
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
          {productsInCategory.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      </>
    );
  }
}
