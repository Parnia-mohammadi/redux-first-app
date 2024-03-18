import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";
// import { fetchUsers } from "../redux/users/userActions";

function UsersList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);
  // console.log(data);
  // this is the first method with redux
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);
  // second method with redux-toolkit
  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>Users List : </h2>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data.map((user) => (
            <li>{user.name}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;
