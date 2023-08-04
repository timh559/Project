import React from "react";
import { useSelector } from "react-redux";
import { Card, Carousel, Container, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const products = useSelector((state) => state.products.products);
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
  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        {isLoggedIn && (
          <Container>
            <p>Logged in as: {currentUser.currentUser.email}
            <Button
              className="p-2 mx-auto"
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
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          borderRadius: "10px",
          padding: "5%",
          margin: "5% auto",
          height: "100%",
          width: "80%",
          maxHeight: "80vh",
          maxWidth: "700px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h3>Featured Products</h3>
        <Carousel
        >
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <Card
                style={{
                  padding: "1rem",
                  margin: "0 auto",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}