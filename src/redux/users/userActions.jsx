import axios from "axios";
import {
  Fetch_Users_Failure,
  Fetch_Users_Request,
  Fetch_Users_Success,
} from "./userTypes";
// export function fetchUsers(){
//     return ()=>{}
// }
// export const fetchUsers = () => {return ()=>{}}
export const fetchUsers = () => (dispatch) => {
  dispatch({ type: Fetch_Users_Request });
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .catch((res) => dispatch({ type: Fetch_Users_Success, payload: res.data }))
    .then((err) =>
      dispatch({ type: Fetch_Users_Failure, payload: err.message })
    );
};
