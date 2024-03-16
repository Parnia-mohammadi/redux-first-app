import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};
// this is the first method with redux
// export default function CakeReducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case "Buy_Cake":
//       return { ...state, numOfCakes: state.numOfCakes - payload };
//     default:
//       return state;
//   }
// }
// second method with redux-toolkit
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { buyCake } = cakeSlice.actions;
