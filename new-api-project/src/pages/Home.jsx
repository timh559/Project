import React from "react";
import { useSelector } from "react-redux";
import { Card, Carousel } from "react-bootstrap";

export default function Home() {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "white",
          margin: "5% auto",
        }}
      >
        <h1>Featured Products</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          borderRadius: "10px",
          padding: "3rem",
          margin: "5% auto",
          width: "80vw",
          maxWidth: "700px",
        }}
      >
        <Carousel>
          {products.map((product, index) => (
            <Carousel.Item key={index}>
              <Card
                style={{
                  padding: "1rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "300px",
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
