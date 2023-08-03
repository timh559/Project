import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocationData = createAsyncThunk(
  "location/data",
  async (arg) => {
    const options = {
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
      params: {
        text: arg,
        languagecode: "en-us",
      },
      headers: {
        "X-RapidAPI-Key": "6ceaeb4e18msh9d97762adbfb376p1f5b6ajsnacdaf0d70b8b",
        "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  }
);

export const fetchHotelList = createAsyncThunk(
  "location/hotelList",
  async (arg) => {
    const options = {
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/properties/list",
      params: {
        offset: "0",
        arrival_date: arg.arrival,
        departure_date: arg.departure,
        guest_qty: arg.numGuests,
        dest_ids: arg.destId,
        room_qty: arg.numRooms,
        search_type: "city",
        order_by: "popularity",
        languagecode: "en-us",
      },
      headers: {
        "X-RapidAPI-Key": "6ceaeb4e18msh9d97762adbfb376p1f5b6ajsnacdaf0d70b8b",
        "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    text: null,
    offset: "0",
    arrival_date: null,
    departure_date: null,
    guest_qty: null,
    dest_ids: null,
    room_qty: null,
    search_type: "city",
    order_by: "popularity",
    languagecode: "en-us",
    status: "idle",
    error: null,
    result: []
  },
  reducers: {
    locationUpdated(state, action) {
      state.text = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLocationData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLocationData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dest_ids = action.payload[0].dest_id;
      })
      .addCase(fetchLocationData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchHotelList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchHotelList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = action.payload.result;
      })
      .addCase(fetchHotelList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { locationUpdated } = locationSlice.actions;

export default locationSlice.reducer;
