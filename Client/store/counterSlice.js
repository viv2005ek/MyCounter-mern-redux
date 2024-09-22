import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    initial: (state, action) => {
      state.count = action.payload.count;
    },
    pushNewCount: (state, action) => {
      console.log(action.payload);
      fetch("http://localhost:3000/count", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: action.payload }), // Ensure newCount is valid
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Pushed updated count:", data);
        })
        .catch((err) => {
          console.error("Failed to update count:", err);
        });
    },

    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

async function fetchData(url) {
  //but you need any external jsx file to initialize the state to use useDispatch and useEffect, {only react component use these hooks}}
  try {
    console.log("Fetching data from counterSlice");
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData("http://localhost:3000/count");

export const { increment, decrement, reset, initial, pushNewCount } =
  counterSlice.actions;
export default counterSlice;
