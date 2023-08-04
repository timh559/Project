import React from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import { decreaseQuantity, increaseQuantity } from "./CartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseQuantity(product));
  }
  function handleDecrease() {
    dispatch(decreaseQuantity(product));
  }

  return (
    <div>
      <ListGroupItem className="d-flex">
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          }}
        >
          <img src={product.image} style={{ height: "70px", width: "70px" }} />
          <h6 className="mx-3">${product.price}</h6>
        </div>
        <div
          style={{
            paddingTop: "3%",
            marginRight: "auto",
            width: "80%",
          }}
        >
          <p className="mx-3" style={{
            fontSize: "14px",
          }}>{product.title}</p>
        </div>
        <div
          style={{
            marginLeft: "auto",
            width: "10%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            size="sm"
            onClick={handleIncrease}
            variant="success"
            style={{
              width: "100%",
              marginLeft: "auto",
            }}
          >
            +
          </Button>
          <h6
            style={{
              textAlign: "center",
            }}
          >
            {product.quantity}
          </h6>
          <Button
            size="sm"
            onClick={handleDecrease}
            variant="danger"
            style={{
              width: "100%",
              marginLeft: "auto",
            }}
          >
            -
          </Button>
        </div>
      </ListGroupItem>
    </div>
  );
}
