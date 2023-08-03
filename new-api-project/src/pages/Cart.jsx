import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ListGroup } from "react-bootstrap";
import { clearCart } from "../components/CartSlice";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice).toFixed(2);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        borderRadius: "10px",
        margin: "5% auto",
        width: "80vw",
        maxWidth: "700px",
      }}
    >
      <ListGroup>
        {cart.map((product) => {
          return <CartItem product={product} />;
        })}
      </ListGroup>
      {cart.length > 0 ? (
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "80vw",
            margin: "2rem",
          }}
        >
          <h1>Total Price</h1>
          <h2>${totalPrice}</h2>
          <Button
            variant="danger"
            onClick={handleClearCart}
            style={{
              width: "50%",
            }}
          >
            Clear Cart
          </Button>
        </div>
      ) : (
          <h1
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2rem",
            }}
          >
            Your cart is empty
          </h1>
      )}
    </div>
  );
}
