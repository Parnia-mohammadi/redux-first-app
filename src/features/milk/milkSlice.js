import { createSlice } from "@reduxjs/toolkit";
// import { buy_milk } from "./milkTypes";

const initialState = {
  numOfMilks: 20,
};
// this is the first method with redux
// export default function milkReducer(state=initialState,{type, payload}){
//     switch(type){
//         case buy_milk : return({...state,numOfMilks:state.numOfMilks - payload});
//         default :return state;
//     }
// }
// second method with redux-toolkit
const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    buy_milk: (state, action) => {
      state.numOfMilks = state.numOfMilks - action.payload;
    },
  },
});

export default milkSlice.reducer;
export const { buy_milk } = milkSlice.actions;
