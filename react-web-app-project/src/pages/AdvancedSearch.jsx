import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelList } from "../components/LocationSlice";
import { useNavigate } from "react-router-dom";

export default function AdvancedSearch() {
    const dest_id = useSelector((state) => state.location.dest_ids);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState({
        offset: '0',
        arrival: '',
        departure: '',
        numGuests: '',
        numRooms: '',
        search_type: 'city',
        order_by: 'popularity',
        languagecode: 'en-us'
    });
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchHotelList(state));
    navigate("/details");
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(73, 181, 203, 0.5)",
        margin: "5vh auto",
        width: "50vw",
        padding: "5vh 10vw",
        borderRadius: "30%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Label>Select Arrival Date</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => setState({ ...state, arrival: e.target.value })}
        ></Form.Control>
        <Form.Label>Select Departure Date</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => setState({ ...state, departure: e.target.value })}
        ></Form.Control>
        <Form.Label># of Guests</Form.Label>
        <Form.Control
          type="number"
          placeholder="# of Guests"
          onChange={(e) => setState({ ...state, numGuests: e.target.value })}
        ></Form.Control>
        <Form.Label># of Rooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="# of Rooms"
          onChange={(e) => setState({ ...state, numRooms: e.target.value })}
        ></Form.Control>
        <Button 
        type="submit"
        onClick={() => setState({...state, destId: dest_id})}>Submit</Button>
      </Form>
    </div>
  );
}
