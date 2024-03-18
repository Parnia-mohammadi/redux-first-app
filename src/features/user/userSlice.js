// this is the first method with redux
// import axios from "axios";
// import {
//   Fetch_Users_Failure,
//   Fetch_Users_Request,
//   Fetch_Users_Success,
// } from "./userTypes";
// // export function fetchUsers(){
// //     return ()=>{}
// // }
// // export const fetchUsers = () => {return ()=>{}}
// export const fetchUsers = () => (dispatch) => {
//   // dispatch({ type: Fetch_Users_Request });
//   dispatch(fetchUsersRequest());
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) =>
//       // dispatch({ type: Fetch_Users_Success, payload: res.data })
//       dispatch(fetchUsersSuccess(res.data))
//     )
//     .catch((err) =>
//       // dispatch({ type: Fetch_Users_Failure, payload: err.message })
//       dispatch(fetchUsersFailure(err.message))
//     );
// };
// function fetchUsersRequest() {
//   return { type: Fetch_Users_Request };
// }
// function fetchUsersSuccess(users) {
//   return { type: Fetch_Users_Success, payload: users };
// }
// function fetchUsersFailure(error) {
//   return { type: Fetch_Users_Failure, payload: error };
// }

// second method with redux-toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

// The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   extraReducers: {
//     [getAsyncUsers.pending]: (state, action) => {
//       state.loading = true;
//       state.data = [];
//       state.error = "";
//     },
//     [getAsyncUsers.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = "";
//     },
//     [getAsyncUsers.rejected]: (state, action) => {
//       state.loading = false;
//       state.data = [];
//       state.error = action.payload;
//     },
//   },
// });
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAsyncUsers.pending, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });
    builder.addCase(getAsyncUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getAsyncUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
