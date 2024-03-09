import {
  Fetch_Users_Failure,
  Fetch_Users_Request,
  Fetch_Users_Success,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Fetch_Users_Request:
      return { ...state, loading: true };
    case Fetch_Users_Success:
      return { ...state, loading: false, data: action.payload, error: "" };
    case Fetch_Users_Failure:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}
