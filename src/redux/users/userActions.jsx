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
  // dispatch({ type: Fetch_Users_Request });
  dispatch(fetchUsersRequest());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>
      // dispatch({ type: Fetch_Users_Success, payload: res.data })
      dispatch(fetchUsersSuccess(res.data))
    )
    .catch((err) =>
      // dispatch({ type: Fetch_Users_Failure, payload: err.message })
      dispatch(fetchUsersFailure(err.message))
    );
};

function fetchUsersRequest() {
  return { type: Fetch_Users_Request };
}
function fetchUsersSuccess(users) {
  return { type: Fetch_Users_Success, payload: users };
}
function fetchUsersFailure(error) {
  return { type: Fetch_Users_Failure, payload: error };
}
