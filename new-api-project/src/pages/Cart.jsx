import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { ListGroup, Container, Button } from "react-bootstrap";
import { clearCart } from "../components/CartSlice";
import { useAuth } from "../contexts/AuthContext";


export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice).toFixed(2);
  const dispatch = useDispatch();
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

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          margin: "1% auto",
        }}
      >
        {isLoggedIn && (
          <Container>
            <p>Logged in as: {currentUser.currentUser.email}
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
      <div
        style={{
          padding: "2%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          borderRadius: "10px",
          margin: "5% auto",
          width: "80vw",
          maxWidth: "700px",
        }}
      >
        <ListGroup>
          {cart.map((product) => {
            return <CartItem product={product} key={product.id}/>;
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
    </div>
  );
}
