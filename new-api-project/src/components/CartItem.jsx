import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { increaseQuantity } from "./CartSlice";
import { decreaseQuantity } from "./CartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ product }) {
    const dispatch = useDispatch();
    
    function handleIncrease() {
        dispatch(increaseQuantity(product))
    }
    function handleDecrease() {
        dispatch(decreaseQuantity(product))
    }
    
    return (


    <div>
      <ListGroupItem className="d-flex">
        <img src={product.image} style={{ height: "80px", width: "80px" }} />
        <div
          style={{
            marginRight: "auto",
            width: "80%",
          }}
        >
          <h5 className="mx-3">{product.title}</h5>
          <p className="mx-3">${product.price}</p>
        </div>
        <div style={{
            marginLeft: "auto",
            width: "20%",
            display: "flex",
            flexDirection: "column",

        }}>
          <Button onClick={handleIncrease} variant="success">
            +
          </Button>
          <h3 style={{
                textAlign: "center" 
          }}>{product.quantity}</h3>
          <Button onClick={handleDecrease} variant="danger">
            -
          </Button>
        </div>
      </ListGroupItem>
    </div>
  );
}
