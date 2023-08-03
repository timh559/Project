import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { addToCart } from "../components/CartSlice";
import { increaseQuantity, decreaseQuantity } from "../components/CartSlice";


export default function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const quantity = cart.find((item) => item.id === product.id)?.quantity;
  
  
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleIncrease() {
    dispatch(increaseQuantity(product));
  }

  function handleDecrease() {
    dispatch(decreaseQuantity(product));
  }

  return (
    <div>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            height: "300px",
            objectFit: "contain",
          }}
        />
        <Card.Body className="d-flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text className="mb-5">{product.description}</Card.Text>
          <div>
            {(cart.find((item) => item.id === product.id)) ? (
              <div className="d-flex justify-content-center" style={{
                position: "absolute",
                bottom: "0px",
                width: "90%"
              }}
              >
                <Button onClick={handleDecrease} variant="danger" className="mx-2 w-50">
                  -
                </Button>
                <h3 className="mx-2">{quantity}</h3>
                <Button onClick={handleIncrease} variant="success" className="mx-2 w-50">
                  +
                </Button>
              </div>
            ) : (
              <Button
                variant="danger"
                onClick={handleAddToCart}
                style={{
                  width: "90%",
                  position: "absolute",
                  bottom: "0px",
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
