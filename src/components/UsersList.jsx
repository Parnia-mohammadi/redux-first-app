import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

function UsersList() {
  const dispatch = useDispatch();
  const {loading, data, error } = useSelector((state) => state.users);
  console.log(data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>Users List : </h2>
      {loading?<p>Loading ...</p>:error?<p>{error}</p>:
      <div>
        {data.map(user=><li>{user.name}</li>)}
      </div>
      }
    </div>
  );
}

export default UsersList;
